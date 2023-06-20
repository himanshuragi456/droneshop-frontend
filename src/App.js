import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import GalleryPage from './pages/GalleryPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DetailProductPage from './pages/DetailProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessCheckoutPage from './pages/SuccessCheckoutPage';
import ProfilePage from './pages/ProfilePage';
import AllTransactionPage from './pages/AllTransactionPage';
import DetailTransactionPage from './pages/DetailTransactionPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="transaction" element={<AllTransactionPage />} />
      <Route path="products/:id" element={<DetailProductPage />} />
      <Route path="transaction/:id" element={<DetailTransactionPage />} />
      <Route path="success/:id" element={<SuccessCheckoutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
