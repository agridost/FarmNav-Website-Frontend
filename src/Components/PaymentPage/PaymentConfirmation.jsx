import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaShoppingBag } from 'react-icons/fa';
import './PaymentConfirmation.css';

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [error, setError] = useState('');

  // No need for loading state since we're not fetching details
  // No need for paymentMethods and statusDetails objects

  useEffect(() => {
    // Simple validation of orderId
    if (!orderId) {
      setError('Invalid order reference');
    }
  }, [orderId]);

  if (error) {
    return (
      <div className="payment-confirmation error">
        <div className="error-content">
          <h3>We encountered an issue</h3>
          <p className="error-message">{error}</p>
          <div className="action-buttons">
            <button onClick={() => navigate('/orders')} className="btn primary">
              <FaShoppingBag /> View Orders
            </button>
            <button onClick={() => navigate('/')} className="btn secondary">
              <FaHome /> Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-confirmation">
      <div className="confirmation-card">
        <div className="confirmation-header">
          <FaCheckCircle className="success-icon" />
          <h1>Order Confirmed!</h1>
          <p className="order-reference">Order ID: {orderId}</p>
        </div>

        <div className="confirmation-footer">
          <p className="thank-you-message">
            Thank you for your order! We've sent a confirmation to your email.
          </p>
          
          <div className="action-buttons">
            <button onClick={() => navigate('/orders')} className="btn primary">
              <FaShoppingBag /> View All Orders
            </button>
            <button onClick={() => navigate('/')} className="btn secondary">
              <FaHome /> Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;