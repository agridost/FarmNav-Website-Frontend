import React from 'react';
import './About.css';
import About1 from '../../Assets/about1.jpg';
import About2 from '../../Assets/about2.jpg';
import About3 from '../../Assets/about3.jpg';
import ImageSlider from './ImageSlider';

const About = () => {
  const images = [About1, About2, About3];

  return (
    <div className="about-section">
      <div className="about-left-section">
        <ImageSlider images={images} interval={4000} />
      </div>
      <div className="about-right-section">
        <h3>Empowering Agriculture Through Innovation</h3>
        <p>
          <strong>FARMNAV FRESH CHASE PRIVATE LIMITED</strong> operates under the trademark <strong>FarmNav</strong>, a cutting-edge <strong>B2B E-Commerce platform</strong>.
          At FarmNav, we have developed an innovative digital ecosystem that transforms the <strong>agricultural supply chain</strong>, connecting farmers, logistics teams, and businesses seamlessly.
        </p>
        <p>
          Our platform empowers agriculturists by providing a <span className="highlight">streamlined method</span> to list their fresh produce and costs transparently. This ensures fair pricing and better profitability for their hard work.
        </p>
        <p>
          By offering direct access to an expansive customer base, FarmNav fosters a sustainable approach to agriculture, bridging the gap between <strong>producers and buyers</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
