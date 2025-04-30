import React, { useRef } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const buttons = useRef([]);

  const createRipple = (e, index) => {
    const button = buttons.current[index];
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <div className='wholeBody'>
      <div className='wrapper'>
        <div className='form-box'>
          <form>
            <h4>Create Account</h4>
            
            <div className='input-box'>
              <input type="text" placeholder='Full Name' required />
              <FaUser className='icons' />
            </div>
            
            <div className='input-box'>
              <input type="email" placeholder='Email' required />
              <FaEnvelope className='icons' />
            </div>
            
            <div className='input-box'>
              <input type="text" placeholder='Username' required />
              <FaUser className='icons' />
            </div>
            
            <div className='input-box'>
              <input type="password" placeholder='Password' required />
              <FaLock className='icons' />
            </div>
            
            <div className='input-box'>
              <input type="password" placeholder='Confirm Password' required />
              <FaLock className='icons' />
            </div>

            <button 
              className='form-button' 
              type='submit'
              ref={el => buttons.current[0] = el}
              onClick={(e) => createRipple(e, 0)}
            >
              Register Now
            </button>
            
            <div className="register-link">
              <p>Already have an account? <span onClick={() => navigate('/loginSignUp')}>Login</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;