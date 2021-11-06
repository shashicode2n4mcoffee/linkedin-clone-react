import React from 'react';
import logo from '../assets/linkedin-logo.svg';
import '../scss/Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='login-logo'>
        <img src={logo} alt='' />
      </div>
      <div className='card'>
        <h1>Sign in</h1>
        <span>Stay updated on your professional world</span>
        <form className='login-form'>
          <input type='email' className='core-input' placeholder='Email id' />
          <input
            type='password'
            className='core-input'
            placeholder='Password'
          />
          <span className='login-forgotpassword'>Forgot Password ?</span>
          <button className='core-button login-submit'>Sign in</button>
        </form>
        <div className='login-or'>
          <div className='login-dash'></div>
          <span>or</span>
          <div className='login-dash'></div>
        </div>
        <button className='core-button login-google'>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
