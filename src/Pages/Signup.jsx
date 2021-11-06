import React from 'react';
import '../scss/signup.scss';
import logo from '../Assets/linkedin-logo.svg';

const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup-logo'>
        <img src={logo} alt='' />
      </div>
      <span className='signup-title'>
        Make the most of your professional life
      </span>
      <div className='card'>
        <form className='signup-form'>
          <input type='email' className='core-input' placeholder='Email id' />
          <input
            type='password'
            className='core-input'
            placeholder='Password'
          />
          <span className='signup-forgotpassword'>
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </span>
          <button className='core-button signup-submit'>Agree & Join</button>
        </form>
        <div className='signup-or'>
          <div className='signup-dash'></div>
          <span>or</span>
          <div className='signup-dash'></div>
        </div>
        <button className='core-button signup-google'>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
