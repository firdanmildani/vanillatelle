import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from '../pages/ProductPage'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import CategoryPage from '../pages/CategoryPage'
import About from '../pages/About'
import ProductDetail from '../components/ProductDetail'
import ContactPage from '../pages/ContactPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="product" element={<ProductPage />}>
        {/* Add a nested route for displaying a specific product */}
        <Route path=":productId" element={<ProductDetail />} />
      </Route>
      <Route path='/products' element={<Shop/>}/>
      {/* <Route path='product-category' element={<CategoryPage/>}/> */}
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact-us' element={<ContactPage/>}/>
    </Routes>
  )
}

export default MainRoutes