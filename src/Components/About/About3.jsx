import React, { useEffect } from 'react';
import './About.css';
import About1 from '../../Assets/about1.jpg';
import About2 from '../../Assets/about2.jpg';

const About3 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.about3-left-section, .about3-right-section, .image-layout, .layout-image');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about3-section">
      <div className="about3-left-section">
        <div className="image-layout">
          <img src={About1} alt="About 1" className="layout-image" />
          <img src={About2} alt="About 2" className="layout-image" />
        </div>
      </div>
      <div className="about3-right-section">
        <h2>🌟 Exceptional Quality, Every Time</h2>
        <p>
          At FarmNav, we go above and beyond to ensure our products are cleaned, packaged, and stored with the highest standards of quality and care. Our meticulous attention to detail guarantees you receive only the best, every time.
        </p>
        
        <h2>🍴 Empowering Hospitality Businesses</h2>
        <p>
          Restaurants, hostels, catering services, cloud kitchens, and wholesalers leverage our platform to easily source top-quality ingredients. With just a few clicks, they gain access to a wide range of vegetables, fruits, pulses, greens, nuts, dry fruits, and spices.
        </p>

        <h2>🚀 Streamlining Daily Operations</h2>
        <p>
          <strong>FarmNav</strong> is more than a supplier; we are a partner in streamlining your business operations. Our comprehensive platform helps businesses optimize their supply chains and ensures they are always stocked with the freshest ingredients to thrive.
        </p>
      </div>
    </div>
  );
};

export default About3;
