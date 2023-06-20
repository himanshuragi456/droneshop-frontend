import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import LoadingPage from './LoadingPage';
import Header from '../components/Header';
import DetailProduct from '../components/DetailProduct';
import Footer from '../components/Footer';

export default function DetailProductPage() {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [reRender, setReRender] = useState(false);

  const reRenderPage = () => {
    setReRender(!reRender);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/product/${id}`)
      .then((response) => {
        setProductData(response.data);
        document.title = `${response.data.name} | DroneShopID`;
      });
  }, []);

  if (productData) {
    return (
      <>
        <Header reRender={reRender} />
        <DetailProduct ProductData={productData} reRenderPage={reRenderPage} />
        <Footer />
      </>
    );
  }

  return (
    <LoadingPage />
  );
}
