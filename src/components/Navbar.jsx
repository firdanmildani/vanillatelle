import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    // <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
    //   <span className="navbar-toggler-icon"></span>
    // </button>
    // <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    //   <div className="offcanvas-header">
    //     <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
    //     <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //   </div>
    //   <div className="offcanvas-body">
    //     <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
    //       <li className="nav-item">
    //         <a className="nav-link active" aria-current="page" href="#">Home</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Link</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <nav className={`navbar navbar-expand-lg ${navbarClasses}`}>
      <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="brand-logo" src="/img/logo2.png" alt="Logo" />
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <FontAwesomeIcon icon={faBars} className="social-icon" size="lg"/>
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav ml-auto">
            
          </ul>
        </div> */}
      <div className="collapse navbar-collapse offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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