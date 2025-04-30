import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { 
  FaLeaf, 
  FaChartLine, 
  FaDollarSign, 
  FaCarrot, 
  FaAppleAlt, 
  FaLemon,  
  FaPepperHot,
  FaSeedling,
  FaBreadSlice // Using bread slice as alternative for rice
} from 'react-icons/fa';
import { FaBowlRice } from 'react-icons/fa6';

const LandingPage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Leafy Green", icon: <FaLeaf />, items: ["Spinach", "Kale", "Lettuce", "Arugula"] },
    { name: "Root Veggies", icon: <FaCarrot />, items: ["Carrots", "Potatoes", "Beets", "Radishes"] },
    { name: "Citrus Fruits", icon: <FaLemon />, items: ["Oranges", "Lemons", "Grapefruits", "Limes"] },
    { name: "Fruits", icon: <FaAppleAlt />, items: ["Apples", "Bananas", "Berries", "Grapes"] },
    { name: "Grains", icon: <FaBowlRice />, items: ["Wheat", "Barley", "Oats", "Quinoa", "Millet"] },
    { name: "Rice", icon: <FaBowlRice />, items: ["Basmati", "Jasmine", "Brown", "Wild", "Black"] },
    { name: "Spices", icon: <FaPepperHot />, items: ["Cumin", "Turmeric", "Coriander", "Paprika", "Cardamom"] },
    { name: "Herbs", icon: <FaSeedling />, items: ["Basil", "Parsley", "Thyme", "Rosemary", "Oregano"] }
  ];

  return (
    <>
      <div className="landing-container">
        <header className="landing-header">
          <h1>Welcome to Farm Nav</h1>
          <p>Your complete solution for modern farming management</p>
        </header>

        {/* Shop by Category Section */}
        <section className="shop-section">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div className="category-card floating" key={index}>
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.name}</h3>
                <ul className="category-items">
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button 
                  className="shop-button"
                  onClick={() => navigate(`/shop/${category.name.toLowerCase().replace(' ', '-')}`)}
                >
                  Shop {category.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-title">Our Features</h2>
          <div className="features-grid">
            <div className="feature-card floating">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Crop Management</h3>
              <p>Track and optimize your crop cycles with our intelligent monitoring system.</p>
            </div>
            
            <div className="feature-card floating">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Farm Analytics</h3>
              <p>Get detailed analytics on soil health, weather patterns, and crop performance.</p>
            </div>
            
            <div className="feature-card floating">
              <div className="feature-icon">
                <FaDollarSign />
              </div>
              <h3>Market Connect</h3>
              <p>Connect directly with buyers and get the best prices for your produce.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <button 
            className="cta-button floating"
            onClick={() => navigate('/login')}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;