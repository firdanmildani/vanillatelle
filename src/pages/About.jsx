import React from 'react'
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const About = () => {
  return (
    <>
    <div className="section" id='about-banner'>
        <Parallax className="hero-img" strength={600} bgImage="/img/banner2.jpg" id='about-us'>
            <div className="hero-content-wrapper" id='hero-about'>
                <div className="hero-content">
                    <h1>ABOUT US</h1>                
                </div>
            </div>
        </Parallax>
    </div>
    <div className="section" id='about-main'>
        <div className="section-content about-content row">
            <div className="col about-detail d-flex justify-content-center align-items-center ">
                <div className="about-caption">
                    <h5>Welcome to Vanillatelle</h5>
                    <p>When you choose Vanillatelle, you’re choosing more than just a product. You’re choosing a promise. A promise of the purest essence of vanilla, a promise of ethical conduct, a promise of a brighter, more sustainable future, and a promise of an exceptional customer experience.
                        Vanillatelle is committed to providing you with the highest quality vanilla products. <br/><br/>But we’re more than just quality. We believe in exceptional customer experiences. With fast shipment options and dedicated after-sales support, we ensure your journey with Vanillatelle is seamless and satisfying.</p>
                </div>
            </div>
            <div className="col about-media d-flex flex-row-reverse ratio ratio-1x1">
                <img src="/img/worker.jpg" alt=""/>
            </div>
        </div>

        <div className="section-content about-content row " >
            <div className="col about-media d-flex flex-row-start ratio ratio-1x1">
                <img src="/img/packing1.jpg" alt=""/>
            </div>
            <div className="col about-detail d-flex justify-content-center align-items-center ">
                <div className="about-caption">
                    {/* <h5>Welcome to Vanillatelle</h5> */}
                    <p>Whether you’re a baker looking for the perfect vanilla extract to elevate your creations, a home cook looking to add a touch of luxury to your everyday dishes, or simply a vanilla lover who wants to enjoy the purest essence of this delicious flavor, Vanillatelle is the perfect choice for you.
                    <br/><br/>We invite you to experience the Vanillatelle difference. With every purchase, you’re not just buying a product, you’re supporting a better future for vanilla farmers and the planet.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="" id=''>
        <Parallax className="hero-img" strength={600} bgImage="/img/shipping.jpg" id='about-us'>
            <div className="hero-content-wrapper" id='hero-about'>
                <div className="hero-content">
                    {/* <h1>We Provide You With The Best Vanilla in The World</h1> */}
                </div>
            </div>
        </Parallax>
    </div>
    <div className="section" id='team-section'>
        <div className="container">
            <div className="team-title text-center mb-5">
                <h1>Meet Our Team</h1>
            </div>
            <div className="team-profile d-flex justify-content-center">
                <div className="row col d-flex justify-content-center">
                    <div className="team-card mx-5 py-2">
                        <div className="team-media d-flex justify-content-center align-items-center">
                            <img src="/img/faaz.jpg" alt=""/>
                        </div>
                        <div className="team-name text-center mt-2">
                            <h4>M. FAAZ FAHRIZAL, S.PD</h4>
                            <p>FOUNDER</p>
                        </div>
                        <div className="team-social d-flex justify-content-center w-100">
                            <span className="fa-stack d-flex justify-content-center ">
                                <a href="https://www.facebook.com/profile.php?id=100008560969314" target="_blank" className='px-2'>
                                    <FontAwesomeIcon icon={faFacebook} className="social-icon" size="lg"/>
                                </a>
                                <a href="https://www.instagram.com/m.faazrizal/" target="_blank" className='px-2'>
                                    <FontAwesomeIcon icon={faInstagram} className="social-icon" size="lg"/>
                                </a>
                                <a href="mailto:m.faaz.fahrizal09@gmail.com" className='px-2'>
                                    <FontAwesomeIcon icon={faEnvelope} className="social-icon" size="lg"/>
                                </a>
                                <a href="https://www.linkedin.com/in/faaz-fahrizal-745aa9200/" target="_blank" className='px-2'>
                                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" size="lg"/>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="team-card mx-5 py-2">
                        <div className="team-media d-flex justify-content-center align-items-center">
                            <img src="/img/firdan.jpg" alt=""/>
                        </div>
                        <div className="team-name text-center mt-2">
                            <h4>FIRDAN MILDANI, S.KOM</h4>
                            <p>CO-FOUNDER</p>
                        </div>
                        <div className="team-social d-flex justify-content-center w-100">
                            <span className="fa-stack d-flex justify-content-center ">
                                <a href="https://www.facebook.com/firdhanmildani/" target="_blank" className='px-2'>
                                    <FontAwesomeIcon icon={faFacebook} size="lg" className="social-icon"/>
                                </a>
                                <a href="https://www.instagram.com/firdanmildani/" target="_blank" className='px-2'>
                                    <FontAwesomeIcon icon={faInstagram} size="lg" className="social-icon"/>
                                </a>
                                <a href="mailto:firdanmildani@gmail.com" className='px-2'>
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="social-icon"/>
                                </a>
                                <a href="https://www.linkedin.com/in/firdan-mildani-9b70571b0/" target="_blank" className='px-2'>
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="social-icon"/>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About