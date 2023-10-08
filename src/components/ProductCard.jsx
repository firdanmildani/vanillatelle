import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ products = [], selectedCategory, searchQuery }) => {
  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const categoryMatches = !selectedCategory || product.category === selectedCategory;
    const searchMatches = productName.includes(searchQuery.toLowerCase());
    return categoryMatches && searchMatches;
  });

  return (
    <>
      <div className="row d-flex">
        {filteredProducts.map((product) => (
          <div className="col-md-3 col-sm-11 col-lg-3 text-center mt-3 product-card" key={product._id}>
            <Link to={`/product/${product._id}`} className='product-link'>
              <div className="product-card-inner ratio ratio-1x1">
                <img className="square-image" src={product.images.img1} alt={product.name} />
              </div>
              <div className="product-title text-center mt-2">
                <p>{product.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
