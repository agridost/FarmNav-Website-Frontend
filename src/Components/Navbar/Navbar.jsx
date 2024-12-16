import React, { useEffect, useState } from 'react';
import './Navbar.css';
import FARMlogo from '../../Assets/FARMlogo.png';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Link as ScrollLink } from 'react-scroll';  // Import Link for smooth scrolling
import menu_icon from '../../Assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            {/* Wrap the logo in Link to navigate back to home */}
            <Link to="/" className="logo-container">
                <img src={FARMlogo} alt="FARM Logo" className="logo" />
            </Link>

            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li>
                    <ScrollLink to="hero" smooth={true} offset={0} duration={500}>Home</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="programs" smooth={true} offset={-260} duration={500}>Services</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="about" smooth={true} offset={-260} duration={500}>About</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="contact" smooth={true} offset={-260} duration={500}>Contact</ScrollLink>
                </li>
            </ul>

            <img src={menu_icon} className="menu-icon" onClick={toggleMenu} alt="Menu Icon" />
        </nav>
    );
};

export default Navbar;
