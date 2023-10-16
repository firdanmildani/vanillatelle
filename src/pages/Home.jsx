import React from "react";
import { Parallax } from "react-parallax";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Category from "../components/Category";
import Product from "../components/Product";

import category_items from '../assets/JsonData/category-data.json'
import features_data from '../assets/JsonData/features-data.json'
import { products } from '../assets/db/products';



const Home = () => {
    return(
        <>
        <div className="section" id="hero-section">
            <Hero />
        </div>
        <div className="section" id="features-section">
            <div className="container">
                <div className="section-title d-flex justify-content-center mb-4">
                    <h2>WHY CHOOSE US</h2>
                </div>
                <div className="section-content">
                    <div className="row d-flex flex-warp justify-content-center">
                    {
                    features_data.map((item,index) => (
                        <Features
                        imagePath={item.imagePath}
                        imageAlt={item.imageAlt}
                        featureTitle={item.featureTitle}
                        featureCaption={item.featureCaption}
                        />
                    ))
                    }     
                    </div>
                </div>
            </div>
        </div>
        <div className="section" id="category-section">
            <div className="container">
                <div className="section-title row mb-4">
                    <h2>WE PROVIDE YOU WITH</h2>
                    <div className="desc">
                        <p>Our exclusive vanilla collection of carefully selected vanilla beans and fine ground vanilla</p>
                    </div> 
                </div>
                <div className="section-content">
                    <div className="row d-flex flex-warp justify-content-center">
                        {
                        category_items.map((item,index) => (
                            <Category
                                route={item.route}
                                imagePath={item.imagePath}
                                imageAlt={item.imageAlt}
                                categoryName={item.categoryName}
                            />
                        ))
                        }     
                    </div>
                </div>
            </div>
        </div>
        <div className="section" id="product-section">
            <div className="container">
                <div className="section-title row mb-4">
                    <h2>OUR PRODUCTS</h2>
                </div>
                <div className="section-content">
                    <div className="d-flex row col">
                    {products.slice(0, 4).map((product) => (
                        <Product
                            key={product._id}
                            images={product.images}
                            imageAlt={product.imageAlt}
                            name={product.name}
                            productCaption={product.productCaption}
                            _id={product._id}
                        />
                    ))} 
                    </div>
                    <div className="d-flex justify-content-center btn-container">
                        <a className="btn-view-all" href="/products">View All Products</a>
                    </div>
                </div>
            </div>
        </div>
        
        

        <div className="section d-flex align-items-center" id="banner-section">
            <div className="banner-bg">
                <div className="container d-flex align-items-center" id="banner-container">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="banner-caption row">
                            <h1>Savor the Superior Quality of Our Vanilla!</h1>
                            {/* <h4>-Vanillatelle</h4> */}
                        </div>
                        <div className="banner-btn">
                            <div className="button-opp">Order Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section" id="">
            <div className="container">
                <div className="section-title text-center mb-4">
                    <h2>SECURE AND EASY PAYMENT</h2>
                    <div className="desc">
                        <p>We prioritize both security and simplicity in our payment methods, making your transactions secure and easy</p>
                    </div> 
                </div>
                <div className="section-content">
                    <div className="d-flex justify-content-center" id="payment-media">
                        <img className="payment-img" src="/img/payment.png" alt="Payment Method" />
                    </div>
                </div>
            </div>
        </div>
        
        <div className="section" id="">
            <div className="container">
                <div className="section-title text-center mb-4">
                    <h2>CONVENIENT DELIVERY OPTIONS</h2>
                    <div className="desc">
                        <p>Our convenient delivery options ensure that your order arrives when and where you need it.</p>
                    </div> 
                </div>
                <div className="section-content">
                    <div className="d-flex justify-content-center" id="payment-media">
                        <img className="payment-img" src="/img/delivery.png" alt="Payment Method" />
                    </div>
                </div>
            </div>
        </div>
       
        <div className="" id=''>
            <Parallax className="hero-img" strength={600} bgImage="/img/worker.jpg" id='about-us'>
                <div className="hero-content-wrapper" id='hero-about'>
                    <div className="hero-content">
                        {/* <h1>We Provide You With The Best Vanilla in The World</h1> */}
                    </div>
                </div>
            </Parallax>
        </div>

        <div className="section" id="about-section">
            <div className="container">
                <div className="section-title d-flex justify-content-center mb-4">
                    <h2>ABOUT US</h2>
                </div>
                <div className="section-content about-content-home row">
                        <div className="about-desc col-lg-6">
                            <p>Vanillatelle always provides premium quality vanilla beans. Our vanilla undergoes meticulous harvesting and processing by skilled professionals to ensure the preservation of its premium quality. We have earned the trust of both local and international markets due to the exceptional quality of our vanilla. We prioritize the safety, cleanliness and overall health of our products, ensuring they meet the highest standards before reaching the hands of consumers.</p>
                            <a className="button btn-theme-primary btn-lg" title="Planifolia Vanilla Beans Indonesia" href="/about-us">Read More</a>
                        </div>                             
                        <div className="about-media col-lg-6">
                            <img className="about-img" src="/img/about.jpg" alt="Vanilla" />
                        </div>
                </div>
            </div>
        </div>

        <div className="section" id="">
            <div className="container">
                <div className="section-title text-center mb-4">
                    <h2>WE'RE REGISTERED ON</h2>
                </div>
                <div className="section-content">
                    <div className="d-flex justify-content-center" id="payment-media">
                        <img className="payment-img" src="/img/registered.png" alt="Payment Method" />
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default Home;