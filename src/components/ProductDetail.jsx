import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../assets/db/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find((p) => p._id === productId);

    const [activeImage, setActiveImage] = useState(product.images.img1);

    const handleImageClick = (image) => {
        setActiveImage(image);
    };

    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
    <>          
    <div className="product-main row">
        <div className='link'>
        <a href="">Home </a>
            <span>/</span>
            <a href=""> Vanilla Bean</a>
        </div>
        <div className="col-lg-5 col-md-12 col-12 pb-4">
            <div className="ratio ratio-1x1">
                <img src={activeImage} alt="" className='thumbnail img-fluid w-100 pb-2'/>                            
            </div>
            <div className='small-img-group d-flex justify-content-between mx-auto'>
                {Object.values(product.images).map((image, index) => (
                <div className="small-img-col" key={index}>
                    <div className="ratio ratio-1x1">
                        <img
                        src={image}
                        alt=""
                        className="thumb-menu img-fluid w-100"
                        onClick={() => handleImageClick(image)}
                        />
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 product-info">
            <h1>{product.name}</h1>
            <p>{product.productCaption}</p>
            <div className="share-container">
                <h6>Share : </h6>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://youtu.be/dQw4w9WgXcQ?si=7uf71k9SCj0IMBXC" target="_blank" className='px-2'>
                    <FontAwesomeIcon icon={faFacebook} className="social-icon" size="lg"/>
                </a>
                <a href="https://www.pinterest.com/pin/create/button/?url=https://vanillature.com/product/planifolia-ground-vanilla-powder/&media=https://vanillature.com/wp-content/uploads/2021/10/IMG_20230825_102210_103706.jpg&description=wagwan" target="_blank" className='px-2'>
                    <FontAwesomeIcon icon={faPinterest} className="social-icon" size="lg"/>
                </a>
                <a href="https://twitter.com/intent/tweet?url=https://youtu.be/dQw4w9WgXcQ?si=7uf71k9SCj0IMBXC&text=Get rekt" target="_blank" className='px-2'>
                    <FontAwesomeIcon icon={faTwitter} className="social-icon" size="lg"/>
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://vanillature.com/product/planifolia-ground-vanilla-powder/&amp;title=Planifolia%20Ground%20Vanilla%20Powder" target="_blank" className='px-2'>
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" size="lg"/>
                </a>
                <a href="https://api.whatsapp.com/send?text=test%20-%20https://youtu.be/dQw4w9WgXcQ?si=7uf71k9SCj0IMBXC" target="_blank" className='px-2'>
                    <FontAwesomeIcon icon={faWhatsapp} className="social-icon" size="lg"/>
                </a>
            </div>
        </div>   
    </div>

    <div className="product-footer mt-5">
        <ul className="tabs d-flex col nav nav-right">
            <li className={`nav-item ${activeTab === 'description' ? 'active' : ''}`}>
                <a className="nav-link nav-link-product" onClick={() => handleTabClick('description')}>
                    Description
                </a>
            </li>
            <li className={`nav-item ${activeTab === 'specification' ? 'active' : ''}`}>
                <a className="nav-link nav-link-product" onClick={() => handleTabClick('specification')}>
                    Specification
                </a>
            </li>
            <li className={`nav-item ${activeTab === 'how_to_buy' ? 'active' : ''}`}>
                <a className="nav-link nav-link-product" onClick={() => handleTabClick('how_to_buy')}>
                    How to buy
                </a>
            </li>
        </ul>
        <div id="tab-description" role="tabpanel" style={{ display: activeTab === 'description' ? 'block' : 'none' }}>				
            <h2>Description</h2>
            <p>{product.description}</p>
            {/* <ul>
            <li>Ethically sourced and grown by a micro-farmer cooperative</li>
            <li><span className="">Vacuum-sealed for freshness</span></li>
            <li><span className="">Length : 14-18 cm</span></li>
            <li><span className="">Moisture: 20-30 %</span></li>
            <li><span className="">Natural dry with the sun</span></li>
            <li><span className="">Phytosanitary certificate from the Indonesian Government</span></li>
            <li><span className="">Shipping worldwide</span></li>
            <li><span className="">Quality guarantee</span></li>
            <li><span className="">Affordable Price</span></li>
            </ul> */}
            <div className="text_exposed_show">
                <p>We firmly believe that our vanilla beans stand out as some of the finest in the world. You can trust us to provide the best quality vanilla beans at affordable prices. Become a part of our community today!</p>
            </div>
        </div>

        <div id="tab-specification" role="tabpanel" style={{ display: activeTab === 'specification' ? 'block' : 'none' }}>
        <h2>Specification</h2>
            {/* <p>Are you a pastry chef, restaurateur, baker, ice cream maker, cooking school, dessert maker, or just passionate about cooking with the highest quality vanilla pods? You have come to the right place!</p> */}
            {/* <figure className=""> */}
                <table className='table table-dark custom-table'>
                    <tbody>
                        <tr>
                            <td><strong>Origin</strong></td>
                            <td>{product.specification.origin}</td>
                        </tr>
                        <tr>
                            <td><strong>Grade</strong></td>
                            <td>{product.specification.grade}</td>                    
                        </tr>
                        <tr>
                            <td><strong>Moisture</strong></td>
                            <td>{product.specification.moisture}</td>
                        </tr>
                        <tr>
                            <td><strong>Vanillin Content</strong></td>
                            <td>{product.specification.vanillinContent}</td>
                        </tr>
                        <tr>
                            <td><strong>Size</strong></td>
                            <td>{product.specification.size}</td>
                        </tr>
                        <tr>
                            <td><strong>Flavor</strong></td>
                            <td>{product.specification.flavor}</td>
                        </tr>
                        <tr>
                            <td><strong>Applications</strong></td>
                            <td>{product.specification.applications}</td>
                        </tr>
                    </tbody>
                </table>
            {/* </figure> */}
        </div>

        <div id="tab-how_to_buy" role="tabpanel" style={{ display: activeTab === 'how_to_buy' ? 'block' : 'none' }}>
        <h2>How to Buy</h2>
            <p>For orders or inquiries please contact us :</p>
            <div className="img-container mb-3">
                <a href="">
                    <img src="/img/whatsapp.png" alt="" />
                </a>
            </div>
            <p>Or you can email us at : <br/><a href="mailto:buy@vanillatelle.com">buy@vanillatelle.com</a></p>
        </div>
    </div>
                     
    </>
  )
}

export default ProductDetail;