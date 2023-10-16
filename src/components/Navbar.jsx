import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactDOM } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/' && window.scrollY >= window.innerHeight) {
        // If the user has scrolled more than 50 pixels, change the background color
        setScrolling(true);
      } else {
        // Otherwise, keep the transparent background
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup when the component unmounts
    };
  }, [location.pathname]);

  const navbarClasses = `${scrolling ? 'scrolled' : ''} ${
    location.pathname === '/' ? 'navbar-absolute' : ''
  }`;

  return (
    // <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
    //   <span class="navbar-toggler-icon"></span>
    // </button>
    // <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    //   <div class="offcanvas-header">
    //     <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
    //     <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //   </div>
    //   <div class="offcanvas-body">
    //     <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
    //       <li class="nav-item">
    //         <a class="nav-link active" aria-current="page" href="#">Home</a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">Link</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <nav className={`navbar navbar-expand-lg ${navbarClasses}`}>
      <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="brand-logo" src="/img/Logo2.png" alt="Logo" />
          </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <FontAwesomeIcon icon={faBars} className="social-icon" size="lg"/>
          {/* <span class="navbar-toggler-icon"></span> */}
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav ml-auto">
            
          </ul>
        </div> */}
      <div class="collapse navbar-collapse offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/' ? 'nav-active' : ''}`} href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/products' ? 'nav-active' : ''}`} href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/about-us' ? 'nav-active' : ''}`} href="/about-us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/contact-us' ? 'nav-active' : ''}`} href="/contact-us">
                Contact Us
              </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
);
}

export default Navbar;