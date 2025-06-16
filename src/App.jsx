import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
// import ProductPage from './Components/ProductPage';
import Footwear from './Cart/Footwear';
import AllshoePage from './Components/ProductPage';
import HomeProductPage from './Components/HomeProductPage';
import CheckoutPage from './page/Cart';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/product/:id" element={<AllshoePage />} />
        <Route path="/Allshoe/:id" element={<AllshoePage />} />
        <Route path="/homeProduct/:id" element={<HomeProductPage />} />
         <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
