import React from 'react';
import { Link } from 'react-router-dom';

import PaymentImage from '../assets/images/Payment/payment.png';
import splitString from '../utils/splitString';

export default function SuccessCheckout(props) {
  const { TransactionData } = props;

  return (
    <section className="success-checkout">
      <div className="success-checkout-container">
        <div className="success-checkout-container-image">
          <img src={PaymentImage} alt="Waiting for payment" />
        </div>
        <h1>Waiting for payment</h1>
        <div className="payment-container">
          <div className="payment-method">
            <p>Payment method</p>
            <p className="payment-method-info">Jaog Bank</p>
          </div>
          <div className="payment-method">
            <p>Payment code</p>
            <p className="payment-method-info">{splitString(TransactionData._id)}</p>
          </div>
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
