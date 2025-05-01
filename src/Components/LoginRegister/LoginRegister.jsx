import React, { useRef, useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const navigate = useNavigate();
  const buttons = useRef([]);
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Redirect to landing page after successful login
      navigate('/landing');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='wholeBody'>
      <div className='wrapper'>
        <div className='form-box login'>
          <form onSubmit={handleLogin}>
            <h4>Welcome Back</h4>
            
            {error && <div className="error-message">{error}</div>}
            
            <div className='input-box'>
              <input 
                type="text" 
                name="usernameOrEmail"
                placeholder='Username or Email' 
                value={formData.usernameOrEmail}
                onChange={handleChange}
                required 
              />
              <FaUser className='icons' />
            </div>
            
            <div className='input-box'>
              <input 
                type="password" 
                name="password"
                placeholder='Password' 
                value={formData.password}
                onChange={handleChange}
                required 
              />
              <FaLock className='icons' />
            </div>

            <div className="remember-forget">
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
              onClick={(e) => createRipple(e, 0)}
              disabled={isLoading}
            >
              {isLoading ? 'LOGGING IN...' : 'LOGIN'}
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