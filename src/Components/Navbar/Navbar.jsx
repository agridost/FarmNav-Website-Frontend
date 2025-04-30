import React, { useEffect, useState } from 'react';
import './Navbar.css';
import FARMlogo from '../../Assets/FARMlogo.png';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import menu_icon from '../../Assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        });

        // Check if we're on the landing page (home) to determine login state
        setIsLoggedIn(location.pathname === '/landing');
        setIsLoggedIn(location.pathname === '/shop/rice')
    }, [location.pathname]);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleAuthAction = () => {
        if (isLoggedIn) {
            // Handle logout logic
            setIsLoggedIn(false);
            // Redirect to login page or perform other logout actions
            window.location.href = '/loginSignUp';
        }
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <Link to="/" className="logo-container">
                <img src={FARMlogo} alt="FARM Logo" className="logo" />
            </Link>

            <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
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
                <li>
                    {isLoggedIn ? (
                        <button onClick={handleAuthAction} className="auth-button">
                            Logout
                        </button>
                    ) : (
                        <Link to="/loginSignUp" className="auth-link">Login/SignUp</Link>
                    )}
                </li>
            </ul>

            <img src={menu_icon} className='menu-icon' onClick={toggleMenu} alt='Menu Icon' />
        </nav>
    );
};

export default Navbar;