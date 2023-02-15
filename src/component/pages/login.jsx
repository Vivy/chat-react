import { signInWithEmailAndPassword } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (valueList) => {
    const email = valueList.email;
    const password = valueList.password;
    console.log(valueList, 'this is valuelist');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formContainer__wrapper'>
        <h2>ChatMe</h2>
        <p className='title'>Login</p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
        >
          <Form className='form'>
            <Field type='email' name='email' placeholder='email' />
            <Field type='password' name='password' placeholder='password' />
            <button type='submit'>Login</button>
          </Form>
        </Formik>
        {err && <span>Something is wrong</span>}
        <p>
          You don`t have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
