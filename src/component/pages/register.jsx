import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { auth, db, storage } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (valueList) => {
    const email = valueList.email;
    const password = valueList.password;
    const file = valueList.file;
    const displayName = valueList.text;
    console.log(valueList, 'this is valuelist');

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate('/');
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
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
        <p>
          You have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
