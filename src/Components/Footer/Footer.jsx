import React, { useState, useEffect } from 'react';
import './Footer.css';
import facebook from '../../Assets/Facebook.png';
import linkedin from '../../Assets/linkedin.png';
import instagram from '../../Assets/instagram.png';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Scroll listener to toggle the Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer">
      <p>© 2024 FarmNav | FARMNAV FRESH CHASE PRIVATE LIMITED All rights reserved.</p>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/profile.php?id=61568209073976" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/farmnav/about/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/farmnav.in/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
        <li><a href="/our-policy">Privacy Policy</a></li>
      </ul>
      {showButton && (
        <button className="back-to-top active" onClick={scrollToTop} title="Back to Top">
          ↑
        </button>
      )}
    </div>
  );
};

export default Footer;
