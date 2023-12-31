import React from 'react';
import { Link } from 'react-router-dom';

import PaymentImage from '../assets/images/Payment/payment.png';

export default function SuccessCheckout(props) {
  const { TransactionData } = props;

  return (
    <section className="success-checkout">
      <div className="success-checkout-container">
        <div className="success-checkout-container-image">
          <img src={PaymentImage} alt="Waiting for payment" />
        </div>
        <h1>Order Placed!</h1>
        <div className="payment-container">
          <div className="payment-method">
            <p>Payment method</p>
            <p className="payment-method-info">COD</p>
          </div>
          {/* <div className="payment-method">
            <p>Payment code</p>
            <p className="payment-method-info">{splitString(TransactionData._id)}</p>
          </div> */}
          <div className="payment-method">
            <p>Total payment</p>
            <p className="payment-method-info">{TransactionData.total}</p>
          </div>
        </div>
        <div className="check-payment-status">
          <Link to={`/transaction/${TransactionData._id}`}>Payment status</Link>
        </div>
      </div>
    </section>
  );
}
