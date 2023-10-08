import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../assets/db/products';

const CategoryPage = () => {
  return (
    <div className='section'>
        <div className='container'>
            <div className='link mt-2 mb-2'>
                <a href="">Home </a>
                <span>/</span>
                <a href=""> Category</a>
            </div>
            <div className="main row">
                <ProductCard products={products}/>                     
            </div>
        </div>
    </div>
  )
}

export default CategoryPage