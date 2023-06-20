import React, { useEffect } from 'react';

import BrandLogo from '../assets/images/Header/Logo.svg';

export default function LoadingPage() {
  useEffect(() => {
    document.title = 'Loading...';
  });

  return (
    <section className="loading">
      <img src={BrandLogo} alt="Brand Logo" />
    </section>
  );
}
