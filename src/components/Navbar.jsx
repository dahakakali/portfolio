import React, { useState, useEffect, useRef } from 'react';
import '../Navbar.css';
import logo from './logo.jpg';
import cv from '../../src/assets/CV_2_MRIDUL_BHAKTA.pdf';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  // Function to toggle the navbar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close the navbar if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed w-full z-50 shadow-md" ref={navbarRef}>
        <div className="container mx-auto flex justify-between items-center">
          <a className="navbar-brand text-gradient text-2xl font-bold flex items-center" href="#home">
            <div className="logo w-10 h-10 mr-2">
              <img src={logo} alt="Logo" className="rounded-full" />
            </div>
            Mridul Bhakta
          </a>
          <div className="navbar-collapse desktop-navbar flex items-center">
            <ul className="navbar-nav ms-auto flex space-x-4">
              <li className="nav-item">
                <a className="nav-link text-dark hover:text-blue-500 py-2 px-4" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark hover:text-blue-500 py-2 px-4" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark hover:text-blue-500 py-2 px-4" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark hover:text-blue-500 py-2 px-4" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            {/* CV Download Button */}
            <a
              href={cv} // Replace with the actual CV file path
              download="Mridul_Bhakta_CV"
              className="btn btn-primary text-white py-2 px-6 ms-4"
              style={{ fontSize: '16px' }}
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Navbar */}
      <nav className="navbar navbar-light fixed w-full z-50 shadow-md mobile-navbar" ref={navbarRef}>
        <div className="container mx-auto flex justify-between items-center">
          <a className="navbar-brand text-gradient text-2xl font-bold" href="#home">
            Mridul Bhakta
          </a>
          <button
            className="navbar-toggler text-dark border-2 border-gray-600 p-2 rounded-md"
            type="button"
            onClick={toggleNav}
            aria-expanded={isNavOpen}
          >
            <span className="navbar-toggler-icon bg-gray-600 w-6 h-0.5 block"></span>
          </button>
        </div>
        <div className={`navbar-collapse mobile-nav ${isNavOpen ? 'nav-open' : ''}`}>
          <ul className="navbar-nav flex flex-col space-y-4 items-center py-4">
            <li className="nav-item">
              <a className="nav-link text-dark hover:text-blue-500 py-2 px-4" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark hover:text-blue-500 py-2 px-4" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark hover:text-blue-500 py-2 px-4" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark hover:text-blue-500 py-2 px-4" href="#contact">
                Contact
              </a>
            </li>
            {/* CV Download Button */}
            <a
              href="/path-to-your-cv.pdf" // Replace with the actual CV file path
              download="Mridul_Bhakta_CV"
              className="btn btn-primary text-white py-2 px-6"
              style={{ fontSize: '16px' }}
            >
              Download CV
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
