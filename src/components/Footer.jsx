import React from 'react';
import { Link } from 'react-router-dom';

import BrandLogo from '../assets/images/Footer/Logo.svg';
import SocialYoutube from '../assets/images/Footer/social-youtube.svg';
import SocialTwitter from '../assets/images/Footer/social-twitter.svg';
import SocialInstagram from '../assets/images/Footer/social-instagram.svg';
import SocialFacebook from '../assets/images/Footer/social-facebook.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="company-profile">
        <Link to="/">
          <img src={BrandLogo} alt="Drone Shop ID" />
          <p>DroneShop</p>
        </Link>
        <p>
          Look up the sky and beautiful
          {' '}
          <br />
          world easily.
        </p>
        <div className="footer-social">
          <Link to="/">
            <img src={SocialFacebook} alt="Social Facebook" className="social-button" />
          </Link>
          <Link to="/">
            <img src={SocialInstagram} alt="Social Instagram" className="social-button" />
          </Link>
          <Link to="/">
            <img src={SocialTwitter} alt="Social Twitter" className="social-button" />
          </Link>
          <Link to="/">
            <img src={SocialYoutube} alt="Social Youtube" className="social-button" />
          </Link>
        </div>
      </div>
      <div className="company-office">
        <h1>Office</h1>
        <p>+91 9301420919</p>
        <p>Indore, Madhya Pradesh</p>
        <p>India</p>
        <p>hirehimanshuragi@gmail.com</p>
      </div>
    </footer>
  );
}
