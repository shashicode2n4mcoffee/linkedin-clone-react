import React, { useState } from 'react';
import '../scss/ForgotPassword.scss';
import logo from '../Assets/linkedin-logo.svg';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [fp, setFp] = useState({});
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(fp);
  };
  return (
    <div className='fp'>
      <div className='fp-logo'>
        <img src={logo} alt='' />
      </div>
      <div className='fp-nav'>
        <Link to='/login'>
          <span className='fp-signin'>Sign In</span>{' '}
        </Link>
        <Link to='/register'>
          <span className='fp-join'>Join Now</span>
        </Link>
      </div>
      <div className='card'>
        <h1>Forgot Password?</h1>
        <span>Reset password in two quick steps</span>
        <form className='fp-form' onSubmit={onHandleSubmit}>
          <input
            type='email'
            className='core-input'
            placeholder='Email id'
            name='email'
            onChange={(e) => {
              setFp({ ...fp, [e.target.name]: e.target.value });
            }}
          />
          <button className='core-button fp-submit' type='submit'>
            Reset Password
          </button>
        </form>
        <div className='fp-back-wrap'>
          <Link to='/login'>
            <span className='fp-back'>Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
