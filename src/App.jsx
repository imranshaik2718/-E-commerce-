import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ProductPage from './Components/ProductPage';
import Footwear from './Cart/Footwear';
import AllshoePage from './Components/ProductPage';
import HomeProductPage from './Components/HomeProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/Allshoe/:id" element={<AllshoePage />} />
        <Route path="/homeProduct/:id" element={<HomeProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
