import React from 'react';
import { useNavigate } from 'react-router-dom';

import NotFoundImage from '../assets/images/NotFound/NotFound.png';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <img src={NotFoundImage} alt="Page Not Found" />
      <h1>Ooppss, Page not found.</h1>
      <div className="go-back-button-container">
        <button type="button" className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </section>
  );
}
