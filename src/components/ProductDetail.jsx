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

    const shareURL = window.location.href; // Get the current URL of the product page

    const socialShareLinks = [
      {
        platform: 'Facebook',
        icon: faFacebook,
        url: `https://www.facebook.com/sharer/sharer.php?u=${shareURL}`,
      },
      {
        platform: 'Pinterest',
        icon: faPinterest,
        url: `https://www.pinterest.com/pin/create/button/?url=${shareURL}`,
      },
      {
        platform: 'Twitter',
        icon: faTwitter,
        url: `https://twitter.com/intent/tweet?url=${shareURL}`,
      },
      {
        platform: 'LinkedIn',
        icon: faLinkedin,
        url: `https://www.linkedin.com/shareArticle?mini=true&amp;url=${shareURL}`,
      },
      {
        platform: 'WhatsApp',
        icon: faWhatsapp,
        url: `https://api.whatsapp.com/send?text=${shareURL}`,
      },
    ];
    
    const message = `Hello, I want to buy this: ${shareURL}`;
    const phoneNumber = '6281563143180'; // The target phone number
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // JSON-LD schema markup for the product
    const productSchema = {
        "@context": "http://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.images.img1,
        "sku": product._id,
        "brand": {
            "@type": "Brand",
            "name": "Your Brand Name"
        },
        "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "USD",
            "availability": "InStock",
            "url": window.location.href
        }
    };

    return (
    <>          
    <div className="product-main row">
        <div className='link'>
        <a href="/">Home</a>
            <span> / </span>
            <a href="/products">Products</a>
            <span> / </span>
            <a href="javascript:void(0);">{product.name}</a>
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
                <h6>Share :</h6>
                {socialShareLinks.map((shareLink, index) => (
                    <a
                        href={shareLink.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2"
                        key={index}
                    >
                        <FontAwesomeIcon
                        icon={shareLink.icon}
                        className="social-icon"
                        size="lg"
                        />
                    </a>
                ))}
            </div>
        </div>   
    </div>

    <div className="product-footer mt-5">
        <ul className="tabs d-flex col nav nav-right">
            <li className={`nav-item ${activeTab === 'description' ? 'active' : ''}`}>
                <a className="nav-link nav-link-product" onClick={() => handleTabClick('description')} href='javascript:void(0);'>
                    Description
                </a>
            </li>
            <li className={`nav-item ${activeTab === 'specification' ? 'active' : ''}`}>
                <a className="nav-link nav-link-product" onClick={() => handleTabClick('specification')} href='javascript:void(0);'>
                    Specification
                </a>
            </li>
            <li className={`nav-item ${activeTab === 'how_to_buy' ? 'active' : ''}`}>
                <a className="nav-link nav-link-product" onClick={() => handleTabClick('how_to_buy')} href='javascript:void(0);'>
                    How to buy
                </a>
            </li>
        </ul>
        <div className='product-tab' id="tab-description" role="tabpanel" style={{ display: activeTab === 'description' ? 'block' : 'none' }}>				
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
                <p>We firmly believe that our vanilla products stand out as some of the finest in the world. You can trust us to provide the best quality vanilla products at affordable prices. Become a part of our community today!</p>
            </div>
        </div>

        <div className='product-tab' id="tab-specification" role="tabpanel" style={{ display: activeTab === 'specification' ? 'block' : 'none' }}>
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

        <div className='product-tab' id="tab-how_to_buy" role="tabpanel" style={{ display: activeTab === 'how_to_buy' ? 'block' : 'none' }}>
        <h2>How to Buy</h2>
            <p>For orders or inquiries please contact us :</p>
            <div className="img-container mb-3">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <img src="/img/whatsapp.png" alt="" />
                </a>
            </div>
            <p>Or you can email us at : <br/><a href="mailto:buy@vanillatelle.com">buy@vanillatelle.com</a></p>
        </div>
    </div>

    {/* Add JSON-LD schema markup within the component */}
    <script type="application/ld+json">{JSON.stringify(productSchema)}</script>

    </>
  )
}

export default ProductDetail;