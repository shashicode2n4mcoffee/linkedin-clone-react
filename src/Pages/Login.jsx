import React, { useState } from 'react';
import logo from '../Assets/linkedin-logo.svg';
import '../scss/Login.scss';
import { loginUserAction } from '../Redux/Actions/Login';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({});
  const dispatch = useDispatch();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    if (login.email && login.password) {
      dispatch(loginUserAction(login));
    }
  };

  return (
    <div className='login'>
      <div className='login-logo'>
        <img src={logo} alt='' />
      </div>
      <div className='card'>
        <h1>Sign in</h1>
        <span>Stay updated on your professional world</span>
        <form className='login-form' onSubmit={onHandleSubmit}>
          <input
            type='email'
            className='core-input'
            placeholder='Email id'
            name='email'
            onChange={(e) => {
              setLogin({ ...login, [e.target.name]: e.target.value });
            }}
          />
          <input
            type='password'
            className='core-input'
            placeholder='Password'
            name='password'
            onChange={(e) => {
              setLogin({ ...login, [e.target.name]: e.target.value });
            }}
          />
          <span className='login-forgotpassword'>Forgot Password ?</span>
          <button className='core-button login-submit' type='submit'>
            Sign in
          </button>
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
      <div className='signup-route'>
        <span>New to LinkedIn? </span>
        <Link to='/register'>
          <span className='login-join'>Join now</span>{' '}
        </Link>
      </div>
    </div>
  );
};

export default Login;
