import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import splitString from '../utils/splitString';
import decrypt from '../utils/decrypt';
import deleteTransaction from '../services/deleteTransaction';

export default function DetailTransaction(props) {
  const { TransactionData, reRenderPage } = props;

  const navigate = useNavigate();
  const State = useSelector((state) => state);
  const userDataState = State.DroneShop.DroneShop ? decrypt(State.DroneShop.DroneShop) : State.DroneShop;

  const deleteTransactionItems = () => {
    deleteTransaction(TransactionData._id, reRenderPage, userDataState);
  };

  if (TransactionData === null) {
    return (
      <section className="transaction">
        <div className="transaction-sidebar">
          <Link to="/profile">Profile</Link>
          <Link to="/transaction" className="transaction-active">Transaction</Link>
        </div>
        <div className="detail-transaction-info">
          <button type="button" onClick={() => navigate('/transaction')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="no-detail-transaction">
            <p>Transaction is not available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="transaction">
      <div className="transaction-sidebar">
        <Link to="/profile">Profile</Link>
        <Link to="/transaction" className="transaction-active">Transaction</Link>
      </div>
      <div className="detail-transaction-info">
        <button type="button" onClick={() => navigate('/transaction')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="detail-transaction-user">
          <div>
            <p>Full name</p>
            <h1>{TransactionData.fullName}</h1>
          </div>
          <div>
            <p>Phone number</p>
            <h1>{TransactionData.phoneNumber}</h1>
          </div>
        </div>
        <div className="address-detail">
          <p>Full address</p>
          <h1>{TransactionData.address}</h1>
        </div>
        <div className="detail-transaction-payment">
          <div className="payment-detail">
            <p>Payment method</p>
            <h1>Bank Jaog</h1>
          </div>
          <div className="payment-detail">
            <p>Payment code</p>
            <h1>{splitString(TransactionData._id)}</h1>
          </div>
          <div className="payment-detail">
            <p>Total payment</p>
            <h1>{TransactionData.total}</h1>
          </div>
        </div>
        <div className="cancel-transaction">
          <button type="button" className="cancel-transaction-button" onClick={deleteTransactionItems}>
            Cancel transaction
          </button>
        </div>
      </div>
    </section>
  );
}
