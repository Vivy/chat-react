import { Form, Formik } from 'formik';

const Login = () => {
  return (
    <div className='container'>
      <div className='container__wrapper'>
        <h2>ChatMe</h2>
        <p className='title'>Login</p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={''}
        >
          <Form className='form'>
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <button type='submit'>Login</button>
          </Form>
        </Formik>
        <p>You don`t have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
