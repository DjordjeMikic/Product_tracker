import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./App.css";

import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import ProductsPage from './pages/dashboard/pages/Products';
import ProfilePage from './pages/dashboard/pages/Profile';
import AddProductPage from './pages/dashboard/pages/AddProductPage';
import ProductPage from './pages/dashboard/pages/ProductPage';
import NotFound from './pages/NotFound';
import Modal from './components/Modal';
import ChangeProduct from './pages/dashboard/pages/ChangeProduct';
import VerifyAccount from './pages/Verify';

const App = () => (
  <Routes>
    <Route path="/" exact element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/verify/:id" element={<VerifyAccount />} />
    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="/dashboard/products" element={<ProductsPage />} />
      <Route path="/dashboard/profile" element={<ProfilePage />} />
      <Route path="/dashboard/add" element={<AddProductPage />} />
      <Route path="/dashboard/change/:id" element={<ChangeProduct />} />
      <Route path="/dashboard/product/:id" element={<ProductPage />} />
    </Route>
    <Route path="/delete/:id" element={<Modal />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App;
