import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="hero-section">
        <h1>Farm</h1>
        <p className="tagline">Nature's best. Direct to your Business!</p>
      </header>
      
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-icon">🌱</div>
            <h3>Fresh Produce</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">🥛</div>
            <h3>Dairy Products</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">🍖</div>
            <h3>Organic Meats</h3>
          </div>
          <div className="category-card">
            <div className="category-icon">🍞</div>
            <h3>Bakery Items</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;