import React from 'react';
import { Link } from 'react-router-dom';

import Discount from '../assets/images/Header/discount.svg';
import HeroImage from '../assets/images/Header/hero-image.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-description">
        <div className="discount-tag">
          <img src={Discount} alt="Discount" />
          <p>GET 25% DISCOUNT</p>
        </div>
        <h1 className="hero-description-heading">
          Representing
          <br />
          Drone Light
        </h1>
        <p className="hero-description-paragraph">
          Look up the sky and beautiful world with simple navigation. Just record and get a lot memories to share, lightly and fast like a lightning.
        </p>
        <div className="hero-description-button">
          <Link to="/products/61c04a646b1adb1e0bd67a7d">Get Now</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Hero" />
      </div>
    </section>
  );
}
