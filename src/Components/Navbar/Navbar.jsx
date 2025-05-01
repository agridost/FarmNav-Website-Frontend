import React, { useEffect, useState } from 'react';
import './Navbar.css';
import FARMlogo from '../../Assets/FARMlogo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import menu_icon from '../../Assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        });

        // Check authentication status when component mounts or route changes
        checkAuthStatus();
    }, [location.pathname]);

    const checkAuthStatus = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                credentials: 'include' // Important for sending cookies
            });
            
            if (response.ok) {
                const data = await response.json();
                setIsLoggedIn(!!data.user); // Set to true if user data exists
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
            setIsLoggedIn(false);
        }
    };

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const GoToLanding = () =>{
        navigate(`/landing`);
    }

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                credentials: 'include' // Important for cookie-based sessions
            });

            if (response.ok) {
                setIsLoggedIn(false);
                navigate('/loginSignUp');
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <Link to="/" className="logo-container">
                <img src={FARMlogo} alt="FARM Logo" className="logo" />
            </Link>

            <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
                <li>
                    <ScrollLink onClick={GoToLanding} smooth={true} offset={0} duration={500}>Home</ScrollLink>
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
                        <>
                            <button onClick={handleLogout} className="auth-button">
                                Logout
                            </button>
                        </>
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