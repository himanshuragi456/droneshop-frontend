import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartProductList from './CartProductList';
import { ActionCreators } from '../redux/actions';
import getPriceNumber from '../utils/getPriceNumber';
import priceFormat from '../utils/priceFormat';
import decrypt from '../utils/decrypt';

export default function Cart(props) {
  const { reRenderPage } = props;

  const navigate = useNavigate();
  const State = useSelector((state) => state);
  const cartState = State.Cart.Cart ? State.Cart.Cart : [];
  const userDataState = State.DroneShop.DroneShop ? decrypt(State.DroneShop.DroneShop) : State.DroneShop;
  const dispatch = useDispatch();
  const { AddCheckoutAction } = bindActionCreators(ActionCreators, dispatch);

  const [subtotal, setSubtotal] = useState();
  const [totalItems, setTotalItems] = useState();
  const itemsPriceArray = [];
  const totalItemsArray = [];

  const getSubtotal = () => {
    if (cartState.length > 0) {
      cartState.map((items) => totalItemsArray.push(items.quantity));
      setTotalItems(totalItemsArray.reduce((total, num) => total + num));
      cartState.map((items) => itemsPriceArray.push(items.quantity * getPriceNumber(items.price)));
      setSubtotal(itemsPriceArray.reduce((total, num) => total + num));
    } else {
      setTotalItems(0);
      setSubtotal(0);
    }
  };

  const checkoutHandler = () => {
    if (userDataState.token && cartState.length > 0) {
      AddCheckoutAction({
        Checkout: cartState,
      });

      navigate('/checkout');
    }
    return null;
  };

  useEffect(() => {
    if (cartState !== undefined) {
      getSubtotal();
    }
  }, [cartState]);

  if (cartState && subtotal !== undefined) {
    return (
      <section className="cart">
        <div className="cart-list">
          <h1 className="cart-list-title">Shopping Cart</h1>
          {
            cartState.length === 0 ? (
              <p className="cart-empty">Your cart is empty</p>
            )
              : (cartState.map((items) => (
                <CartProductList data={items} reRenderPage={reRenderPage} userDataState={userDataState} />
              )))
          }
        </div>
        <div className="cart-subtotal">
          <h1 className="cart-subtotal-title">Subtotal</h1>
          <div className="cart-subtotal-items">
            <p id="items">{`Subtotal (${cartState.length > 0 ? totalItems : 0} Items)`}</p>
            <p id="subtotal">{cartState.length > 0 ? priceFormat(subtotal) : 0}</p>
          </div>
          <button type="button" className="cart-checkout" onClick={checkoutHandler}>Checkout</button>
        </div>
      </section>
    );
  }

  return null;
}
