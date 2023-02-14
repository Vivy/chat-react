import { Form, Formik } from 'formik';
import { FcAddImage } from 'react-icons/fc';
const Register = () => {
  return (
    <div className='container'>
      <div className='container__wrapper'>
        <h2>ChatMe</h2>
        <p className='title'>Register</p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={''}
        >
          <Form className='form'>
            <input type='text' placeholder='display name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='file' id='file' style={{ display: 'none' }} />
            <label htmlFor='file'>
              <FcAddImage className='icon' />
              Add file here
            </label>
            <button type='submit'>Register</button>
          </Form>
        </Formik>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
