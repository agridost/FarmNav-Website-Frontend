import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Nature’s best, Direct to your Business!</h1>
        <button className='hbtn'><Link to='programs' smooth={true} offset={-260} duration={500}>Services</Link></button>
        <button className='hbtn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></button>
      </div>
    </div>
  )
}

export default Hero