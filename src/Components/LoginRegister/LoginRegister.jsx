import React, { useRef } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
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

  // Dummy login function - no actual authentication
  const handleLogin = (e) => {
    e.preventDefault();
    // Just navigate to home page without any auth check
    navigate('/landing');
  };

  return (
    <div className='wholeBody'>
      <div className='wrapper'>
        <div className='form-box login'>
          <form>
            <h4>Welcome Back</h4>
            
            <div className='input-box'>
              <input type="text" placeholder='Username or Email' required />
              <FaUser className='icons' />
            </div>
            
            <div className='input-box'>
              <input type="password" placeholder='Password' required />
              <FaLock className='icons' />
            </div>

            <div className="remeber-forget">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Forgot Password?
              </a>
            </div>

            <button 
              className='form-button' 
              type='submit'
              ref={el => buttons.current[0] = el}
              onClick={(e) => {
                createRipple(e, 0);
                handleLogin(e);
              }}
            >
              LOGIN
            </button>
            
            <div className="register-link">
              <p>Don't have an account?</p>
            </div>
            
            <button 
              className='form-button' 
              type='button'
              ref={el => buttons.current[1] = el}
              onClick={(e) => {
                createRipple(e, 1);
                navigate('/signup');
              }}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;