import React, { useRef, useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const buttons = useRef([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Redirect to landing page after successful registration
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
        <div className='form-box'>
          <form onSubmit={handleSubmit}>
            <h4>Create Account</h4>
            
            {error && <div className="error-message">{error}</div>}
            
            <div className='input-box'>
              <input 
                type="text" 
                name="fullName"
                placeholder='Full Name' 
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
              <FaUser className='icons' />
            </div>
            
            <div className='input-box'>
              <input 
                type="email" 
                name="email"
                placeholder='Email' 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <FaEnvelope className='icons' />
            </div>
            
            <div className='input-box'>
              <input 
                type="text" 
                name="username"
                placeholder='Username' 
                value={formData.username}
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
            
            <div className='input-box'>
              <input 
                type="password" 
                name="confirmPassword"
                placeholder='Confirm Password' 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
              <FaLock className='icons' />
            </div>

            <button 
              className='form-button' 
              type='submit'
              ref={el => buttons.current[0] = el}
              onClick={(e) => createRipple(e, 0)}
              disabled={isLoading}
            >
              {isLoading ? 'REGISTERING...' : 'REGISTER NOW'}
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