import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

import LoadingPage from './LoadingPage';
import GoogleButton from '../components/GoogleButton';
import BrandLogo from '../assets/images/Header/Logo.svg';
import HeroImage from '../assets/images/Header/hero-image.png';
import useAuthGoogle from '../services/authGoogle';
import { ActionCreators } from '../redux/actions';
import useSignUp from '../services/signUp';
import useSignIn from '../services/signIn';
import decrypt from '../utils/decrypt';

export default function SignUpPage() {
  const navigate = useNavigate();
  const encryptedState = useSelector((state) => state);
  const userDataState = encryptedState.DroneShop.DroneShop ? decrypt(encryptedState.DroneShop.DroneShop) : encryptedState.DroneShop;
  const dispatch = useDispatch();
  const { SignInAction } = bindActionCreators(ActionCreators, dispatch);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setmessageResponse] = useState();

  const AuthGoogle = async (googleData) => {
    useAuthGoogle(googleData, SignInAction);
  };

  const SignUp = (data) => {
    useSignUp(data, setIsLoading, setmessageResponse, () => {
      // SignIn Callback
      useSignIn(
        {
          email: data.email,
          password: data.password,
        },
        SignInAction,
        setIsLoading,
        setmessageResponse,
      );
    });
  };

  useEffect(() => {
    if (userDataState.token) {
      navigate('/profile', { replace: true });
    }
  }, [userDataState]);

  useEffect(() => {
    document.title = 'Sign Up | DroneShopID';
  });

  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <section className="auth">
      <img src={HeroImage} alt="Drone" width="832px" className="auth-image" />
      <div className="signup-form">
        <Link to="/" className="auth-logo">
          <img src={BrandLogo} alt="Drone Shop ID" />
          <p>DroneShopID</p>
        </Link>
        <h1 className="auth-title">Create New Account</h1>
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
        <form onSubmit={handleSubmit(SignUp)} className="auth-input-form">
          <label htmlFor="name" className="auth-label">
            Full Name
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              className="auth-input"
              {...register('fullName', { required: true })}
            />
            { errors.fullName && errors.fullName.type === 'required' && (<span className="auth-error">Please fill out this field.</span>) }
          </label>
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
          <input type="submit" value="Sign Up" className="auth-button" />
        </form>
        { messageResponse && (<span className="auth-failed">{messageResponse}</span>) }
        <p className="auth-change">
          Already have an account?
          {' '}
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </section>
  );
}
