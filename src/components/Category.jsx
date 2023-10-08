import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {

    const category = {
        backgroundColor: '#fff',
        backgroundImage: `url(${props.imagePath})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      };

    return(
        <>
        <div className="category-items col-md-4 col-sm-12 col-lg-4 text-center">
            <Link to={`/products?category=${props.categoryName}`}>
                <div className="category-pic">
                    <div style={category}>
                    <div className="category-caption-wrapper d-flex justify-content-center align-items-center text-center">
                        <div className="category-caption">
                        <h2>{props.categoryName}</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </Link>            
        </div>

        </>
    );
}
export default Category;