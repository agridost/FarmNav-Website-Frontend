import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import TermsConditions from './Components/TermsPolicy/TermsConditions';
import Recognitions from './Components/Recognitions/Recognitions';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Signup from './Components/LoginRegister/Signup'; // <---- ADD THIS
import LandingPage from './Components/Landingpage/LandingPage';
import ShopRice from './Components/Shopping/ShopRice';
import CartPage from './Components/Cart/CartPage';
import { CartProvider } from './Components/Cart/CartContext';
import PaymentPage from './Components/PaymentPage/PaymentPage';
import PaymentConfirmation from './Components/PaymentPage/PaymentConfirmation';
import OrdersPage from './Components/Orders/OrdersPage';

const App = () => {
  return (
    <CartProvider>
    <Router>
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
                  <Title />
                  <Goals />
                  <Title title="Who We Are" />
                  <About />
                  <About2 />
                  <About3 />
                  <Title title="Get in Touch" />
                  <Contact />
                  <Title title="Our RECOGNITIONS" />
                  <Recognitions />
                </div>
              </>
            }
          />
          <Route path="/our-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/loginSignUp" element={<LoginRegister />} />
          <Route path="/signup" element={<Signup />} /> {/* <--- SIGNUP ROUTE */}
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/shop/rice" element={<ShopRice/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/payment" element={<PaymentPage/>}/>
          <Route path="/payment/confirm/:orderId" element={<PaymentConfirmation/>}/>
          <Route path="/orders" element={<OrdersPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;
