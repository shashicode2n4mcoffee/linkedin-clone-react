import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Signup'));
const ForgotPassword = lazy(() => import('../Pages/ForgotPassword.jsx'));
const Home = lazy(() => import('../Pages/Home.jsx'));

const MainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path='/home'
            element={
              <Suspense fallback={<>....</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path='/'
            element={
              <Suspense fallback={<>....</>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            exact
            path='/register'
            element={
              <Suspense fallback={<>....</>}>
                <Register />
              </Suspense>
            }
          />
          <Route
            exact
            path='/forgotpassword'
            element={
              <Suspense fallback={<>....</>}>
                <ForgotPassword />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRoutes;
