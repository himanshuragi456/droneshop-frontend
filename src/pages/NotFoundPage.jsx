import React, { useEffect } from 'react';

import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';

export default function DetailProductPage() {
  useEffect(() => {
    document.title = 'Page Not Found | DroneShopID';
  });

  return (
    <>
      <Header />
      <NotFound />
      <Footer />
    </>
  );
}
