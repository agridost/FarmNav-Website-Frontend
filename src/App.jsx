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
import PrivacyPolicy from './Components/TermsPolicy/PrivacyPolicy'; // Import Privacy Policy component
import TermsConditions from './Components/TermsPolicy/TermsConditions';
import Recognitions from './Components/Recognitions/Recognitions';

const App = () => {
  return (
    <Router> {/* Wrap the application in Router */}
      <div>
        <Navbar />
        <Routes>
          {/* Main Application Routes */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="container">
                  {/* <Title title="What We Offer" />
                  <Programs />  */}
                  <Title />
                  <Goals />
                  <Title title="Who We Are" />
                  <About />
                  <About2 />
                  <About3 />
                  <Title title="Get in Touch" />
                  <Contact />
                  <Title title="Our RECOGNITIONS" />
                  <Recognitions/>
                </div>
              </>
            }
          />
          {/* Privacy Policy Route */}
          <Route path="/our-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
