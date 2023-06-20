import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Checkout from '../components/Checkout';
import Footer from '../components/Footer';
import useProtectedRoutes from '../utils/useProtectedRoutes';

export default function CheckoutPage() {
  const navigate = useNavigate();
  useProtectedRoutes(navigate);

  useEffect(() => {
    document.title = 'Checkout | DroneShopID';
  });

  return (
    <>
      <Header />
      <Checkout />
      <Footer />
    </>
  );
}
