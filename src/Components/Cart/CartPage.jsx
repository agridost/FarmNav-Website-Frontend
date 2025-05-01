import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaShoppingCart } from 'react-icons/fa';
import './CartPage.css';
import { useCart } from './CartContext';
import basmatiImg from '../../Assets/basmati.jpg';
import jasmineImg from '../../Assets/jasmine.jpg';
import brownImg from '../../Assets/brown.jpg';

const CartPage = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();

    const handleGoToCheckout = () => {
        navigate('/payment');
    };

    // Rice products data (should match your ShopRice page)
    const riceProducts = [
        {
            id: 1,
            name: "Basmati Rice",
            price: 1500,
            image: basmatiImg
        },
        {
            id: 2,
            name: "Jasmine Rice",
            price: 1200,
            image: jasmineImg
        },
        {
            id: 3,
            name: "Brown Rice",
            price: 1400,
            image: brownImg
        }
    ];

    // Create cart items with full product details
    const cartItems = Object.keys(cart)
        .map(id => {
            const product = riceProducts.find(p => p.id === Number(id));
            return product ? {
                ...product,
                quantity: cart[id]
            } : null;
        })
        .filter(item => item !== null && item.quantity > 0);

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 200; // Fixed shipping cost
    const total = subtotal + shipping;

    const handleUpdateQuantity = (id, newQuantity) => {
        if (newQuantity > 0) {
            // Update the quantity in the cart
            if (newQuantity > cart[id]) {
                addToCart(id);
            } else {
                decreaseQuantity(id);
            }
        } else {
            removeFromCart(id);
        }
    };

    return (
        <div className="cart-page-container">
            <div className="cart-header">
                <button onClick={() => navigate(-1)} className="back-button">
                    <FaArrowLeft /> Continue Shopping
                </button>
                <h1 className="cart-title">
                    <FaShoppingCart /> Your Shopping Cart
                </h1>
            </div>

            <div className="cart-content">
                {cartItems.length > 0 ? (
                    <>
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="item-details">
                                        <h3 className="item-name">{item.name}</h3>
                                        <p className="item-price">₹{item.price}/25kg</p>
                                        <div className="quantity-controls">
                                            <button
                                                className="quantity-btn"
                                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button
                                                className="quantity-btn"
                                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="item-total">
                                        <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h2>Order Summary</h2>
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
                            <button className="checkout-btn" onClick={handleGoToCheckout}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="empty-cart">
                        <h2>Your cart is empty</h2>
                        <p>Looks like you haven't added anything to your cart yet</p>
                        <button
                            className="continue-shopping-btn"
                            onClick={() => navigate('/shop/rice')}
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;