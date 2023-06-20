import React from 'react';

import Success from '../assets/images/Cart/success.svg';

export default function AddCartModal(props) {
  const { successAddToCart, setSuccessAddToCart } = props;

  const closeModal = () => {
    setSuccessAddToCart(false);
  };

  if (successAddToCart) {
    return (
      <section className="cart-modal" onClick={closeModal}>
        <div className="add-cart-modal" onClick={(e) => e.stopPropagation()}>
          <img src={Success} alt="Brand Logo" />
          <p>Success add to cart</p>
        </div>
      </section>
    );
  }

  return null;
}
