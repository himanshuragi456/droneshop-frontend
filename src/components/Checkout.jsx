import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import EmptyCheckout from '../assets/images/Cart/empty.png';
import postTransaction from '../services/postTransaction';
import getPriceNumber from '../utils/getPriceNumber';
import priceFormat from '../utils/priceFormat';
import decrypt from '../utils/decrypt';

export default function Checkout() {
  const navigate = useNavigate();
  const State = useSelector((state) => state);
  const checkoutState = State.Checkout.Checkout;
  const userDataState = State.DroneShop.DroneShop ? decrypt(State.DroneShop.DroneShop) : State.DroneShop;

  const [fullName, setFullName] = useState();
  const [phoneNumberState, setPhoneNumberState] = useState();
  const [fullAddress, setFullAddress] = useState();
  const [totalItems, setTotalItems] = useState();
  const [subtotal, setSubtotal] = useState();
  const itemsPriceArray = [];
  const totalItemsArray = [];
  const pattern = '[0-9]*';

  const getTotal = () => {
    checkoutState.map((items) => totalItemsArray.push(items.quantity));
    setTotalItems(totalItemsArray.reduce((total, num) => total + num));
    checkoutState.map((items) => itemsPriceArray.push(items.quantity * getPriceNumber(items.price)));
    setSubtotal(itemsPriceArray.reduce((total, num) => total + num));
  };

  const phoneNumberChange = (event) => {
    if (event.target.validity.valid) {
      setPhoneNumberState(event.target.value);
    } else {
      setPhoneNumberState(phoneNumberState);
    }
  };

  const checkoutHandler = () => {
    const payload = {
      fullName,
      phoneNumber: phoneNumberState,
      address: fullAddress,
      transactionItem: checkoutState,
      userId: userDataState.id,
      total: priceFormat(subtotal + (totalItems * 31000) + (totalItems * 10000)),
    };

    postTransaction(payload, userDataState, navigate);
  };

  useEffect(() => {
    if (checkoutState) {
      getTotal();
    }
  }, []);

  if (subtotal && checkoutState !== undefined) {
    return (
      <section className="checkout">
        <div className="checkout-detail">
          <div className="checkout-items">
            <h1 className="checkout-title">Items</h1>
            {
              checkoutState.map((items) => (
                <div className="checkout-product-list">
                  <div className="checkout-product-list-images-name">
                    <img src={items.images} alt={items.name} className="checkout-product-list-image" />
                    <div className="checkout-product-list-name">
                      <h1>{items.name}</h1>
                      <p>{`${items.quantity} Items`}</p>
                    </div>
                  </div>
                  <div className="checkout-product-list-price">
                    <p>{items.price}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="checkout-address">
            <h1 className="checkout-title">Address</h1>
            <div className="checkout-input-form">
              <label htmlFor="fullName" className="checkout-label">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="checkout-input"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  required
                />
              </label>
              <label htmlFor="password" className="checkout-label">
                Phone Number
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="checkout-input"
                  pattern={pattern}
                  value={phoneNumberState}
                  onChange={phoneNumberChange}
                  required
                />
              </label>
              <label htmlFor="fullAddress" className="checkout-label">
                Full Address
                <textarea
                  type="text"
                  rows={3}
                  name="fullAddress"
                  id="fullAddress"
                  className="checkout-input"
                  value={fullAddress}
                  onChange={(event) => setFullAddress(event.target.value)}
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <div className="checkout-total">
          <h1 className="checkout-title">Total</h1>
          <div className="checkout-subtotal-items">
            <p>{`Total (${totalItems} Items)`}</p>
            <p className="checkout-subtotal-costs">{priceFormat(subtotal)}</p>
          </div>
          <div className="checkout-subtotal-items">
            <p>Shipping Costs</p>
            <p className="checkout-subtotal-costs">{priceFormat(totalItems * 31000)}</p>
          </div>
          <div className="checkout-subtotal-items">
            <p>Shipping Insurance</p>
            <p className="checkout-subtotal-costs">{priceFormat(totalItems * 10000)}</p>
          </div>
          <div className="checkout-total-pay">
            <p>Total</p>
            <p className="checkout-total-pay-costs">{priceFormat(subtotal + (totalItems * 31000) + (totalItems * 10000))}</p>
          </div>
          <button type="button" className="cart-checkout" onClick={checkoutHandler}>Pay</button>
        </div>
      </section>
    );
  }

  if (!checkoutState) {
    return (
      <section className="empty-checkout">
        <img src={EmptyCheckout} alt="You haven't shopped" />
        <h1>Ooppss, You haven't shopped.</h1>
        <div className="go-back-button-container">
          <button type="button" className="go-back-button" onClick={() => navigate('/products')}>Go Shop</button>
        </div>
      </section>
    );
  }

  return null;
}
