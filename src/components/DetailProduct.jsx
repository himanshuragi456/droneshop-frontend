import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthModal from './AuthModal';
import AddCartModal from './AddCartModal';
import getPriceNumber from '../utils/getPriceNumber';
import priceFormat from '../utils/priceFormat';
import { ActionCreators } from '../redux/actions';
import postCart from '../services/postCart';
import decrypt from '../utils/decrypt';

export default function DetailProduct(props) {
  const { ProductData, reRenderPage } = props;

  const navigate = useNavigate();
  const encryptedState = useSelector((state) => state);
  const userDataState = encryptedState.DroneShop.DroneShop ? decrypt(encryptedState.DroneShop.DroneShop) : encryptedState.DroneShop;
  const dispatch = useDispatch();
  const { AddCheckoutAction } = bindActionCreators(ActionCreators, dispatch);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successAddToCart, setSuccessAddToCart] = useState(false);
  const [purchaseAmount, setPurchaseAmount] = useState(1);
  const subTotal = priceFormat(purchaseAmount * getPriceNumber(ProductData.price));

  const incrementPurchaseAmount = () => {
    if (purchaseAmount >= 100) {
      setPurchaseAmount(100);
    } else {
      setPurchaseAmount((prevPurchaseAmount) => prevPurchaseAmount + 1);
    }
  };

  const decrementPurchaseAmount = () => {
    if (purchaseAmount <= 1) {
      setPurchaseAmount(1);
    } else {
      setPurchaseAmount((prevPurchaseAmount) => prevPurchaseAmount - 1);
    }
  };

  const purchaseAmountInputHandler = (event) => {
    if (event.target.value <= 1) {
      setPurchaseAmount(1);
    } else if (event.target.value >= 100) {
      setPurchaseAmount(100);
    } else {
      setPurchaseAmount(event.target.value);
    }
  };

  const BuyButtonHandler = () => {
    if (userDataState.token) {
      const data = {
        name: ProductData.name,
        images: ProductData.images,
        price: ProductData.price,
        quantity: purchaseAmount,
        total: subTotal,
      };

      AddCheckoutAction({
        Checkout: [data],
      });

      navigate('/checkout');
    } else {
      setIsModalOpen(true);
    }
  };

  const CartButtonHandler = () => {
    if (userDataState.token) {
      const data = {
        name: ProductData.name,
        images: ProductData.images,
        price: ProductData.price,
        quantity: purchaseAmount,
        total: subTotal,
        userId: userDataState.id,
      };

      postCart(data, setIsModalOpen, userDataState, reRenderPage, setSuccessAddToCart);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="product">
      <div className="product-info">
        <div className="product-image">
          <img src={ProductData.images} alt="Product" />
        </div>
        <div className="product-detail">
          <h1 className="product-detail-name">{ProductData.name}</h1>
          <h1 className="product-detail-price">{ProductData.price}</h1>
          <p className="product-detail-description">{ProductData.description}</p>
          <div className="product-amount">
            <div className="product-amount-count">
              <button type="button" className="purchase-count-button decrement-button" onClick={decrementPurchaseAmount}>-</button>
              <input
                type="number"
                value={purchaseAmount}
                onChange={purchaseAmountInputHandler}
                className="purchase-amount"
                name="purchase-amount"
                id="purchase-amount"
              />
              <button type="button" className="purchase-count-button increment-button" onClick={incrementPurchaseAmount}>+</button>
            </div>
            <div className="product-amount-subtotal">
              <h1>
                Subtotal:
                {' '}
                {subTotal}
              </h1>
            </div>
          </div>
          <div className="product-action">
            <button type="button" className="product-buy" onClick={BuyButtonHandler}>Buy Now</button>
            <button type="button" className="product-add-cart" onClick={CartButtonHandler}>
              Add to Cart
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AuthModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AddCartModal successAddToCart={successAddToCart} setSuccessAddToCart={setSuccessAddToCart} />
    </section>
  );
}
