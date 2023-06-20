import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import useProtectedRoutes from '../utils/useProtectedRoutes';
import decrypt from '../utils/decrypt';

export default function ProfilePage() {
  const navigate = useNavigate();
  useProtectedRoutes(navigate);

  const encryptedState = useSelector((state) => state);
  const userDataState = encryptedState.DroneShop.DroneShop ? decrypt(encryptedState.DroneShop.DroneShop) : encryptedState.DroneShop;

  useEffect(() => {
    document.title = `${userDataState.fullName} | DroneShopID`;
  });

  return (
    <>
      <Header />
      <Profile UserData={userDataState} />
      <Footer />
    </>
  );
}
