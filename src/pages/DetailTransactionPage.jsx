import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import LoadingPage from './LoadingPage';
import Header from '../components/Header';
import DetailTransaction from '../components/DetailTransaction';
import Footer from '../components/Footer';
import useProtectedRoutes from '../utils/useProtectedRoutes';
import decrypt from '../utils/decrypt';

export default function DetailTransactionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  useProtectedRoutes(navigate);
  const State = useSelector((state) => state);
  const userDataState = State.DroneShop.DroneShop ? decrypt(State.DroneShop.DroneShop) : State.DroneShop;

  const [transactionData, setTransactionData] = useState();
  const [reRender, setReRender] = useState(false);

  const reRenderPage = () => {
    setReRender(!reRender);
  };

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
  }, [reRender]);

  useEffect(() => {
    document.title = 'Detail Transaction | DroneShopID';
  });

  if (transactionData || transactionData === null) {
    return (
      <>
        <Header />
        <DetailTransaction TransactionData={transactionData} reRenderPage={reRenderPage} />
        <Footer />
      </>
    );
  }

  return (
    <LoadingPage />
  );
}
