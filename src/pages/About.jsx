import React from 'react'
import { Parallax } from "react-parallax";
import Features from '../components/Features';
import features_data from '../assets/JsonData/features-data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const About = () => {
  return (
    <>
    <div className="section" id='about-banner'>
        <Parallax className="hero-img" strength={600} bgImage="/img/heropic.jpg" id='about-us'>
            <div className="hero-content-wrapper" id='hero-about'>
                <div className="hero-content">
                    <h1>ABOUT US</h1>                
                </div>
            </div>
        </Parallax>
    </div>
    <div className="section" id='about-main'>
        <div className="section-content row">
            <div className="col about-detail d-flex justify-content-center align-items-center ">
                <div className="about-caption">
                    <h5>Welcome to Vanillatelle</h5>
                    <p>Vanillatales is a company that has the best premium vanilla beans in Indonesia, our vanilla is harvested and processed directly by experienced experts in order to maintain the best premium quality of our vanilla. Our vanilla quality is highly trusted by local and international markets. to ensure the quality of our products are safe, clean and healthy to the hands of consumers</p>
                </div>
            </div>
            <div className="col about-media d-flex flex-row-reverse ratio ratio-1x1">
                <img src="/img/worker.jpg" alt=""/>
            </div>
        </div>
        {/* <div className="section text-center my-5">
            <h1>We Provide You With The Best Vanilla in The World</h1>
            <h5>savor the essence of vanilla</h5>
        </div> */}

        <div className="section-content row " >
            <div className="col about-media d-flex flex-row-start ratio ratio-1x1">
                <img src="/img/packing.jpg" alt=""/>
            </div>
            <div className="col about-detail d-flex justify-content-center align-items-center ">
                <div className="about-caption">
                    <h5>Welcome to Vanillatelle</h5>
                    <p>Vanillatales is a company that has the best premium vanilla beans in Indonesia, our vanilla is harvested and processed directly by experienced experts in order to maintain the best premium quality of our vanilla. Our vanilla quality is highly trusted by local and international markets. to ensure the quality of our products are safe, clean and healthy to the hands of consumers</p>
                </div>
            </div>
        </div>
    </div>
    <div className="" id=''>
        <Parallax className="hero-img" strength={600} bgImage="/img/product1.png" id='about-us'>
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
                    <div className="team-card mx-5">
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
                                <a href="mailto:support@vanillatelle.com" className='px-2'>
                                    <FontAwesomeIcon icon={faEnvelope} className="social-icon" size="lg"/>
                                </a>
                                <a href="https://www.linkedin.com/in/faaz-fahrizal-745aa9200/" target="_blank" className='px-2'>
                                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" size="lg"/>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="team-card mx-5">
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
        {/* </div> */}
    </div>
    </>
  )
}

export default About