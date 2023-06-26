import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import LoadingPage from './LoadingPage';
import NotFoundPage from './NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useProtectedRoutes from '../utils/useProtectedRoutes';
import decrypt from '../utils/decrypt';
import PaymentSuccess from '../components/PaymentSuccess';

export default function PaymentSuccessPage() {
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
    document.title = 'Success | DroneShop';
  }, []);

  if (transactionData) {
    return (
      <>
        <Header />
        <PaymentSuccess TransactionData={transactionData} />
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
