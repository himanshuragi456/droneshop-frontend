import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import BrandLogo from '../assets/images/Header/Logo.svg';
import GoogleButton from './GoogleButton';
import { ActionCreators } from '../redux/actions';
import useAuthGoogle from '../services/authGoogle';
import useSignIn from '../services/signIn';

export default function AuthModal(props) {
  const { isOpen, setIsModalOpen } = props;

  const dispatch = useDispatch();
  const { SignInAction } = bindActionCreators(ActionCreators, dispatch);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const Modal = true;
  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setmessageResponse] = useState();

  const AuthGoogle = async (googleData) => {
    useAuthGoogle(googleData, SignInAction, setIsModalOpen, Modal);
  };

  const SignIn = (data) => {
    useSignIn(data, SignInAction, setIsLoading, setmessageResponse, setIsModalOpen, Modal);
  };

  if (isOpen && isLoading) {
    return (
      <section className="auth-modal">
        <div className="loading-modal">
          <img src={BrandLogo} alt="Brand Logo" />
        </div>
      </section>
    );
  }

  if (isOpen) {
    return (
      <section className="auth-modal">
        <div className="signin-form-modal">
          <div className="auth-title-modal">
            <h1>Sign In</h1>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <GoogleButton onClick={renderProps.onClick} />
            )}
            buttonText="Continue with Google"
            onSuccess={AuthGoogle}
            onFailure={AuthGoogle}
            cookiePolicy="single_host_origin"
          />
          <p className="auth-or-text">
            <span className="auth-or-text-span">
              OR
            </span>
          </p>
          <form onSubmit={handleSubmit(SignIn)} className="auth-input-form">
            <label htmlFor="email" className="auth-label">
              Email Address
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
                className="auth-input"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              />
              { errors.email && errors.email.type === 'required' && (<span className="auth-error">Please fill out this field.</span>) }
              { errors.email && errors.email.type === 'pattern' && (<span className="auth-error">Please fill out with correct email.</span>) }
            </label>
            <label htmlFor="password" className="auth-label">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="auth-input"
                {...register('password', { required: true, minLength: 6 })}
              />
              { errors.password && errors.password.type === 'required' && (<span className="auth-error">Please fill out this field.</span>) }
              { errors.password && errors.password.type === 'minLength' && (<span className="auth-error">Minimal password character is 6.</span>) }
            </label>
            <input type="submit" value="Sign In" className="auth-button" />
          </form>
          { messageResponse && (<span className="auth-failed">{messageResponse}</span>) }
          <p className="auth-change">
            Don't have an account?
            {' '}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </section>
    );
  }

  return null;
}
