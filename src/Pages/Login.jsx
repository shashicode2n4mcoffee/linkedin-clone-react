import React, { useState } from 'react';
import logo from '../Assets/linkedin-logo.svg';
import '../scss/Login.scss';
import { loginUserAction } from '../Redux/Actions/Login';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

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

  const responseGoogle = (response) => {
    console.log(response);
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

        <GoogleLogin
          clientId='458080364267-r3r16jn2flj2pkgd45820ftpri45c2kv.apps.googleusercontent.com'
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className='core-button login-google'
            >
              Sign in with Google
            </button>
          )}
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        {/* <button className='core-button login-google'>
          Sign in with Google
        </button> */}
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
