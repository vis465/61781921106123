import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductSpotlight from './pages/ProductSpotlight';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductSpotlight />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
