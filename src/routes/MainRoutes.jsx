import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use Routes directly
import ProductPage from '../pages/ProductPage';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import CategoryPage from '../pages/CategoryPage';
import About from '../pages/About';
import ProductDetail from '../components/ProductDetail';
import ContactPage from '../pages/ContactPage';
import ScrollToTop from '../components/ScrollToTop';

const MainRoutes = () => {
  return (
    <div>
      <ScrollToTop /> {/* Place ScrollToTop outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<ProductPage />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="/products" element={<Shop />} />
        {/* <Route path="product-category" element={<CategoryPage />} /> */}
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
