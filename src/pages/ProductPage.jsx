import React from 'react'
import ProductDetail from '../components/ProductDetail'

const ProductPage = () => {
    return (
        <>
        <div className="section" id='product-page-section'>
            <div className="container my-5 pt-2">
                <ProductDetail/>
            </div>
        </div>
        </>
    )
}

export default ProductPage