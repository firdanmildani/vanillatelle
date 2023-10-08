import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  return (
    <>
      <div className="product-items d-flex flex-direction-row mb-5">
        <div className="product-img">
          <img className="" src={props.imagePath} alt={props.imageAlt} />
        </div>
        <div className="product-detail h-100 ms-4">
          <div className="product-caption desc mb-4">
            <h3>{props.name}</h3>
            <p>{props.productCaption}</p>
          </div>
          <div className="button-holder">
            <Link
              to={`/product/${props._id}`} // Use the product's _id for the URL
              className="button btn-theme-primary btn-lg"
              title={props.name}
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
