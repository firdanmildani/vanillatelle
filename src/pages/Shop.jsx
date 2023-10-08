import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../assets/db/products';
import Filter from '../components/Filter';
import { useParams, useLocation } from 'react-router-dom'; // Import useParams from react-router-dom

const Shop = () => {
  const { category } = useParams(); // Get the category parameter from the URL

  const [searchQuery, setSearchQuery] = useState(""); // Define searchQuery state
  const [selectedCategory, setSelectedCategory] = useState(category || null); // Set the selected category from the URL or null

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const setCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const categoryParam = query.get('category');

  // Use useEffect to set the selected category only once when the component mounts
      useEffect(() => {
        if (categoryParam) {
          setSelectedCategory(categoryParam);
        }
      }, [categoryParam]);

      // Rest of your code...
  return (
    <div className='section'>
      <div className='container my-5 pt-2'>
        <div className='link mt-2 mb-2'>
          <a href="">Home </a>
          <span>/</span>
          <a href=""> Products</a>
        </div>
        <div className="search-filter row mb-5">
          <div className="col">
            <Filter
              selectedCategory={selectedCategory}
              setCategoryFilter={setSelectedCategory}
            />
          </div>
          <div className="col d-flex justify-content-end">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="main w-100">
          <ProductCard
            products={products}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
