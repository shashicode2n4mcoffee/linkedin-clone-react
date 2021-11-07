import React, { useState } from 'react';
import '../scss/signup.scss';
import logo from '../Assets/linkedin-logo.svg';
import { useDispatch } from 'react-redux';
import { registerInitiate } from '../Redux/Actions/Register';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [signup, setSignup] = useState({});
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(signup);
    if (signup.email && signup.password) {
      dispatch(registerInitiate(signup));
    }
  };

  return (
    <div className='signup'>
      <div className='signup-logo'>
        <img src={logo} alt='' />
      </div>
      <span className='signup-title'>
        Make the most of your professional life
      </span>
      <div className='card'>
        <form className='signup-form' onSubmit={onHandleSubmit}>
          <input
            type='email'
            className='core-input'
            placeholder='Email id'
            name='email'
            onChange={(e) => {
              setSignup({ ...signup, [e.target.name]: e.target.value });
            }}
          />
          <input
            type='password'
            className='core-input'
            placeholder='Password'
            name='password'
            onChange={(e) => {
              setSignup({ ...signup, [e.target.name]: e.target.value });
            }}
          />
          <span className='signup-forgotpassword'>
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </span>
          <button className='core-button signup-submit' type='submit'>
            Agree & Join
          </button>
        </form>
        <div className='signup-or'>
          <div className='signup-dash'></div>
          <span>or</span>
          <div className='signup-dash'></div>
        </div>
        <button className='core-button signup-google'>
          Sign in with Google
        </button>
        <div className='signup-route'>
          <span>Already on LinkedIn?</span>
          <Link to='/login'>
            <span className='signup-join'>Signin</span>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
