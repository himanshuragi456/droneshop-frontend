import React, { useEffect } from 'react';

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery | DroneShopID';
  });

  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}
