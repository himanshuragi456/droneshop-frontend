import React from 'react';
import { Link } from 'react-router-dom';

import getPriceNumber from '../utils/getPriceNumber';
import priceFormat from '../utils/priceFormat';

export default function AllTransaction(props) {
  const { TransactionData } = props;

  return (
    <section className="transaction">
      <div className="transaction-sidebar">
        <Link to="/profile">Profile</Link>
        <Link to="/transaction" className="transaction-active">Transaction</Link>
      </div>
      <div className="transaction-info">
        { TransactionData.length === 0 ? (
          <div className="no-transaction">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p>No transaction</p>
          </div>
        )
          : TransactionData.map((item) => (
            <Link to={`/transaction/${item._id}`} className="transaction-list">
              {
                item.transactionItem.map((items) => (
                  <div className="transaction-list-items">
                    <img src={items.images} alt={items.name} />
                    <p className="transaction-list-name">{items.name}</p>
                    <p>{`${items.quantity} ${items.quantity <= 1 ? 'Item' : 'Items'}`}</p>
                    <p>{priceFormat(items.quantity * getPriceNumber(items.price))}</p>
                    <p className="transaction-status">{item.status}</p>
                  </div>
                ))
              }
            </Link>
          ))}
      </div>
    </section>
  );
}
