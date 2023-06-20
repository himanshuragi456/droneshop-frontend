import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import useProtectedRoutes from '../utils/useProtectedRoutes';

export default function CartPage() {
  const navigate = useNavigate();
  useProtectedRoutes(navigate);

  const [reRender, setReRender] = useState(false);

  const reRenderPage = () => {
    setReRender(!reRender);
  };

  useEffect(() => {
    document.title = 'Cart | DroneShopID';
  });

  return (
    <>
      <Header reRender={reRender} />
      <Cart reRenderPage={reRenderPage} />
      <Footer />
    </>
  );
}
