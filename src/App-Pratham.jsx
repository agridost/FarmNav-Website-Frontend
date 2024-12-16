import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Program/Programs';
import Title from './Components/Title/Title';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Goals from './Components/Goals/Goals';
import About from './Components/About/About';
import About2 from './Components/About/About2';
import About3 from './Components/About/About3';
import PrivacyPolicy from './Components/TermsPolicy/PrivacyPolicy';

const App = () => {
  return (
    <Router>  {/* Wrap the entire app in Router */}
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title title="What We Offer" />
          <Programs />
          <Title />
          <Goals />
          <Title title="Who We Are" />
          <About />
          <About2 />
          <About3 />
          <Title title="Get in Touch" />
          <Contact />
          <Footer />
        </div>

        {/* Add Routes for different pages */}
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* You can add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
