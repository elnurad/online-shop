import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App';
import Shop from './components/Shop';
import Cart from './components/Cart';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
