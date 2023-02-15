import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { auth, db, storage } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [err, setErr] = useState(false);

  const onSubmit = async (valueList) => {
    const email = valueList.email;
    const password = valueList.password;
    const file = valueList.file;
    const displayName = valueList.text;
    console.log(valueList, 'this is valuelist');

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              photoURL: downloadURL,
              email,
            });
          });
        }
      );
      console.log(res, 'this is res');
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formContainer__wrapper'>
        <h2>ChatMe</h2>
        <p className='title'>Register</p>
        <Formik
          initialValues={{
            email: '',
            password: '',
            text: '',
            file: '',
          }}
          onSubmit={onSubmit}
        >
          <Form className='form'>
            <Field type='text' name='text' placeholder='display name' />
            <Field type='email' name='email' placeholder='email' />
            <Field type='password' name='password' placeholder='password' />
            <Field
              type='file'
              id='file'
              name='file'
              style={{ display: 'none' }}
            />
            <label htmlFor='file'>
              <FcAddImage className='icon' />
              Add file here
            </label>
            <button type='submit'>Register</button>
          </Form>
        </Formik>
        {err && <span>Something is wrong</span>}
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
