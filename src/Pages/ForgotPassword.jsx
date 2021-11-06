import React from 'react';
import '../scss/ForgotPassword.scss';
import logo from '../Assets/linkedin-logo.svg';

const ForgotPassword = () => {
  return (
    <div className='fp'>
      <div className='fp-logo'>
        <img src={logo} alt='' />
      </div>
      <div className='fp-nav'>
        <span className='fp-signin'>Sign In</span>
        <span className='fp-join'>Join Now</span>
      </div>
      <div className='card'>
        <h1>Sign in</h1>
        <span>Reset password in two quick steps</span>
        <form className='fp-form'>
          <input type='email' className='core-input' placeholder='Email id' />
          <button className='core-button fp-submit'>Sign in</button>
        </form>
        <div className='fp-back-wrap'>
          <span className='fp-back'>Back</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
