import React from 'react';
import './About.css';
import About1 from '../../Assets/about1.jpg';
import About9 from '../../Assets/about2.jpg';
import About3 from '../../Assets/about3.jpg';

const About2 = () => {
  return (
    <div className="about2-section">
      <div className="about2-right-section">
        <h3 className="heading-title">Our Mission: Revolutionizing the Agricultural Supply Chain 🌾</h3>
        <div className="paragraph-section">
          <h4 className="sub-heading">Empowering Producers & Facilitating Global Trade</h4>
          <p>
            Imagine a world where every farmer, no matter the size of their farm, has the opportunity to reach global markets with ease. That's the world we're creating.
          </p>
        </div>
        <div className="paragraph-section">
          <h4 className="sub-heading">Optimizing the Supply Chain for Fresh, Local Produce 🍏</h4>
          <p>
            Fresh produce shouldn't be a luxury—everyone deserves access to healthy, vibrant food. That's why we’ve built a platform that optimizes the entire supply chain.
          </p>
        </div>
      </div>
      <div className="about2-left-section">
        <div className="image-layout">
          <img src={About1} alt="About 1" className="layout-image large" />
          <img src={About9} alt="About 2" className="layout-image small" />
          <img src={About3} alt="About 3" className="layout-image small" />
        </div>
      </div>
    </div>
  );
};

export default About2;
