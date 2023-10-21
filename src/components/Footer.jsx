import React from 'react'
import FooterIcons from './FooterIcons'
import social_data from '../assets/JsonData/social-data.json'
import payment_data from '../assets/JsonData/payment-data.json'
import delivery_data from '../assets/JsonData/delivery-data.json'

const Footer = () => {
  return (
    <footer className='d-flex flex-column'>
        <div className="section footer-section" id="">
            <div className="container footer-container" id=''>
                <div className="footer-contact col footer-col">
                    <h5>Contact Us</h5>
                    <p>Vanillatelle<br/>support@vanillatelle.com <br/>+123456789101</p>
                </div>
                <div className="footer-menu col row d-flex footer-col">
                    <ul className='footer-menu-items'>
                        <li ><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col">

                </div>
                <div className="col footer-icons footer-col">
                    <div className="socials mb-2">
                        <span className='footer-span'>Our Socials</span>
                        <div className="icons d-flex">
                            {social_data.map((item, index) => (
                                <FooterIcons
                                key={index} // Provide a unique key
                                iconPath={item.iconPath}
                                iconAlt={item.iconAlt}
                                iconRoute={item.iconRoute}
                                />
                            ))
                            }
                            </div>
                        </div>
                        <div className="payment mb-2">
                            <span className='footer-span'>Secure Payment Gateways</span>
                            <div className="icons d-flex">
                            {payment_data.map((item, index) => (
                                <FooterIcons
                                key={index} // Provide a unique key
                                iconPath={item.iconPath}
                                iconAlt={item.iconAlt}
                                iconRoute={item.iconRoute}
                                />
                            ))}
                            </div>
                        </div>
                        <div className="delivery mb-2">
                            <span className='footer-span'>Delivery Method</span>
                            <div className="icons d-flex">
                            {delivery_data.map((item, index) => (
                                <FooterIcons
                                key={index} // Provide a unique key
                                iconPath={item.iconPath}
                                iconAlt={item.iconAlt}
                                iconRoute={item.iconRoute}
                                />
                            ))}
                        </div>                
                    </div>
                </div> 
            </div>
        </div>
        <div className="footer-section">
            <div className="container">                   
                <div className="text-center">
                    <div className="row d-flex justify-content-center align-items-center">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="/">HOME</a></li>
                            <li className="list-inline-item"><a href="/products">PRODUCTS</a></li>
                            <li className="list-inline-item"><a href="/about-us">ABOUT US</a></li>
                            <li className="list-inline-item"><a href="/contact-us">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div className="copyright-footer">
                        Copyright © 2023 Vanillatelle
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer