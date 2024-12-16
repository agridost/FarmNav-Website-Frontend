import React, { useEffect, useState } from 'react'
import './Navbar.css'
import FARMlogo from '../../Assets/FARMlogo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../Assets/menu-icon.png'

const Navbar = () => {
    const [sticky,setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () =>{
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={FARMlogo} alt='' className='logo' />
        <ul className={mobileMenu ?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Services</Link></li>
            <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={toggleMenu} />
    </nav>
)
}

export default Navbar