import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCreditCard, FaMobile, FaMoneyBillWave, FaQrcode, FaMapMarkerAlt } from 'react-icons/fa';
import { SiPaytm, SiPhonepe, SiGooglepay } from 'react-icons/si';
import { useCart } from '../Cart/CartContext';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [address, setAddress] = useState('');

  // Sample product data
  const riceProducts = [
    { id: 1, name: "Basmati Rice", price: 1500 },
    { id: 2, name: "Jasmine Rice", price: 1200 },
    { id: 3, name: "Brown Rice", price: 1400 }
  ];

  // Process cart items
  const cartItems = Object.keys(cart)
    .map(id => {
      const product = riceProducts.find(p => p.id === Number(id));
      return product ? { ...product, quantity: cart[id] } : null;
    })
    .filter(item => item !== null && item.quantity > 0);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 200;
  const total = subtotal + shipping;

  // Payment methods
  const paymentMethods = [
    {
      id: 1,
      name: "Credit/Debit Card",
      icon: <FaCreditCard size={24} />,
      description: "Pay using Visa, Mastercard, Rupay, etc."
    },
    {
      id: 2,
      name: "UPI/QR Payment",
      icon: <FaQrcode size={24} />,
      description: "Pay using any UPI app like Google Pay, PhonePe, Paytm",
      upiApps: [
        { name: "Google Pay", icon: <SiGooglepay size={32} color="#4285F4" /> },
        { name: "PhonePe", icon: <SiPhonepe size={32} color="#5F259F" /> },
        { name: "Paytm", icon: <SiPaytm size={32} color="#00BAF2" /> }
      ]
    },
    {
      id: 3,
      name: "Net Banking",
      icon: <FaMobile size={24} />,
      description: "Pay directly from your bank account"
    },
    {
      id: 4,
      name: "Cash on Delivery",
      icon: <FaMoneyBillWave size={24} />,
      description: "Pay when you receive your order"
    }
  ];

  const handlePlaceOrder = async () => {
    if (!selectedMethod) {
      setError('Please select a payment method');
      return;
    }

    if (!address.trim()) {
      setError('Please enter your shipping address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Verify session
      const sessionCheck = await fetch('http://localhost:5000/api/auth/me', {
        credentials: 'include'
      });

      if (!sessionCheck.ok) {
        throw new Error('Session expired. Please log in again.');
      }

      // Prepare order data
      const orderData = {
        paymentMethod: paymentMethods.find(m => m.id === selectedMethod).name,
        cartItems,
        subtotal,
        shippingCost: shipping,
        total,
        shippingAddress: address
      };

      // Submit order (backend will handle email)
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to place order');
      }

      const data = await response.json();
      clearCart();
      navigate(`/payment/confirm/${data.order.id}`);

    } catch (error) {
      console.error('Order error:', error);
      setError(error.message);
      if (error.message.includes('Session expired')) {
        navigate('/login', { state: { from: '/checkout' } });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="payment-page-container">
      <div className="payment-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back to Cart
        </button>
        <h1 className="payment-title">Checkout</h1>
      </div>

      <div className="checkout-sections">
        <div className="address-section">
          <div className="section-header">
            <FaMapMarkerAlt className="section-icon" />
            <h2>Shipping Address</h2>
          </div>
          <textarea
            className="address-textarea"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your complete shipping address..."
            rows={4}
            required
          />
        </div>

        <div className="payment-section">
          <div className="section-header">
            <FaCreditCard className="section-icon" />
            <h2>Payment Method</h2>
          </div>
          <div className="payment-methods">
            {paymentMethods.map(method => (
              <div 
                key={method.id}
                className={`payment-method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="method-icon">{method.icon}</div>
                <div className="method-details">
                  <h3>{method.name}</h3>
                  <p>{method.description}</p>
                  {method.upiApps && (
                    <div className="upi-apps">
                      {method.upiApps.map(app => (
                        <span key={app.name} className="upi-app-icon">
                          {app.icon}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  checked={selectedMethod === method.id}
                  onChange={() => {}}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="order-summary-section">
          <div className="section-header">
            <h2>Order Summary</h2>
          </div>
          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button 
              className="place-order-btn"
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;