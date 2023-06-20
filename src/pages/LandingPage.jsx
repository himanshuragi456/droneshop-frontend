import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import LoadingPage from './LoadingPage';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Benefit from '../components/Benefit';
import Video from '../components/Video';
import NewProducts from '../components/NewProducts';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import { ActionCreators } from '../redux/actions';

export default function LandingPage() {
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
    document.title = 'DroneShopID';
  });

  if (State.ProductsData.ProductsData) {
    return (
      <>
        <Header />
        <Hero />
        <Content />
        <Benefit />
        <Video />
        <NewProducts ProductsData={State.ProductsData.ProductsData} />
        <Testimonial />
        <Footer />
      </>
    );
  }

  return (
    <LoadingPage />
  );
}
