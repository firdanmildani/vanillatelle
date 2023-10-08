import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactDOM } from "react";

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
    <nav className={navbarClasses}>
    <div className="navbar-brand">
        <a href="/">
            <img className="brand-logo" src="/img/Logo2.png"></img>
        </a>
    </div>
    <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
    <ul className="navbar-items">
        <li><a className={`nav-link ${location.pathname === '/' ? 'nav-active' : ''}`} href="/">Home</a></li>
        <li><a className={`nav-link ${location.pathname === '/products' ? 'nav-active' : ''}`} href="/products">Products</a></li>
        <li><a className={`nav-link ${location.pathname === '/about-us' ? 'nav-active' : ''}`} href="/about-us">About Us</a></li>
        <li><a className={`nav-link ${location.pathname === '/contact-us' ? 'nav-active' : ''}`} href="/contact-us">Contact Us</a></li>
    </ul>
</nav>
);
}

export default Navbar;