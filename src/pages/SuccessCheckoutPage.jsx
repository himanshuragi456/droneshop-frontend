import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import LoadingPage from './LoadingPage';
import NotFoundPage from './NotFoundPage';
import Header from '../components/Header';
import SuccessCheckout from '../components/SuccessCheckout';
import Footer from '../components/Footer';
import useProtectedRoutes from '../utils/useProtectedRoutes';
import decrypt from '../utils/decrypt';

export default function SuccessCheckoutPage() {
  const navigate = useNavigate();
  useProtectedRoutes(navigate);
  const State = useSelector((state) => state);
  const userDataState = State.DroneShop.DroneShop ? decrypt(State.DroneShop.DroneShop) : State.DroneShop;
  const { id } = useParams();

  const [transactionData, setTransactionData] = useState();

  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}/api/transaction/detail/${id}`;
    const config = {
      headers: {
        'x-access-token': userDataState.token,
      },
    };

    axios.get(
      url,
      config,
    )
      .then((response) => {
        if (response.data.msg) {
          setTransactionData(null);
        } else {
          setTransactionData(response.data);
        }
      });
  }, []);

  useEffect(() => {
    document.title = 'Success | DroneShopID';
  });

  if (transactionData) {
    return (
      <>
        <Header />
        <SuccessCheckout TransactionData={transactionData} />
        <Footer />
      </>
    );
  }

  if (transactionData === null) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <LoadingPage />
  );
}
