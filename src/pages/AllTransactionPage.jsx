import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import LoadingPage from './LoadingPage';
import Header from '../components/Header';
import AllTransaction from '../components/AllTransaction';
import Footer from '../components/Footer';
import useProtectedRoutes from '../utils/useProtectedRoutes';
import decrypt from '../utils/decrypt';

export default function AllTransactionPage() {
  const navigate = useNavigate();
  useProtectedRoutes(navigate);
  const State = useSelector((state) => state);
  const userDataState = State.DroneShop.DroneShop ? decrypt(State.DroneShop.DroneShop) : State.DroneShop;

  const [transactionData, setTransactionData] = useState();

  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}/api/transaction/${userDataState.id}`;
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
        setTransactionData(response.data);
      });
  }, []);

  useEffect(() => {
    document.title = 'Transaction | DroneShopID';
  });

  if (transactionData) {
    return (
      <>
        <Header />
        <AllTransaction TransactionData={transactionData} />
        <Footer />
      </>
    );
  }

  return (
    <LoadingPage />
  );
}
