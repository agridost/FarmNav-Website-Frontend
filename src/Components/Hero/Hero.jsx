import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { Link } from 'react-scroll';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility to true when the hero section is in view
          } else {
            setIsVisible(false); // Optionally reset visibility when out of view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Clean up observer on unmount
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className={`hero container ${isVisible ? 'active' : ''}`}>
      <div className="hero-text">
      </div>
    </div>
  );
}

export default Hero;
