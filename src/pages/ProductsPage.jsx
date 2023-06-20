import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import LoadingPage from './LoadingPage';
import Header from '../components/Header';
import AllProducts from '../components/AllProducts';
import Footer from '../components/Footer';
import { ActionCreators } from '../redux/actions';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { AddProductsDataAction } = bindActionCreators(ActionCreators, dispatch);
  const State = useSelector((state) => state);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/product`)
      .then((response) => {
        AddProductsDataAction({
          ProductsData: response.data,
        });
      });
  }, []);

  useEffect(() => {
    document.title = 'All Products | DroneShopID';
  });

  if (State.ProductsData.ProductsData) {
    return (
      <>
        <Header />
        <AllProducts ProductsData={State.ProductsData.ProductsData} />
        <Footer />
      </>
    );
  }

  return (
    <LoadingPage />
  );
}
