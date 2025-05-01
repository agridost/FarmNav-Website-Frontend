import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaStar, FaPlus, FaMinus } from 'react-icons/fa';
import { FaBowlRice } from 'react-icons/fa6';
import basmatiImg from '../../Assets/basmati.jpg';
import jasmineImg from '../../Assets/jasmine.jpg';
import brownImg from '../../Assets/brown.jpg';
import './ShopRice.css';
import { useCart } from '../Cart/CartContext';

const ShopRice = () => {
    const navigate = useNavigate();
    const { cart, addToCart, decreaseQuantity } = useCart();

    const riceVarieties = [
        {
            id: 1,
            name: "Basmati Rice",
            description: "Premium long-grain aromatic rice with delicate flavor",
            price: 1500,
            rating: 4.8,
            image: basmatiImg
        },
        {
            id: 2,
            name: "Jasmine Rice",
            description: "Fragrant long-grain rice with subtle floral aroma",
            price: 1200,
            rating: 4.6,
            image: jasmineImg
        },
        {
            id: 3,
            name: "Brown Rice",
            description: "Whole grain rice with nutty flavor and chewy texture",
            price: 1400,
            rating: 4.5,
            image: brownImg
        }
    ];

    const handleGoToCart = () => {
        navigate('/cart');
    };

    return (
        <div className="shop-page-container">
            <div className="rice-shop-content">
                <header className="rice-shop-header">
                    <button onClick={() => navigate(-1)} className="back-button">
                        <FaArrowLeft /> Back to Categories
                    </button>
                    <h1 className="rice-shop-title">
                        <FaBowlRice className="title-icon" /> Rice Varieties
                    </h1>
                    <p className="rice-shop-subtitle">Premium quality rice from trusted farms</p>
                </header>

                <div className="rice-products-grid">
                    {riceVarieties.map((rice) => (
                        <div key={rice.id} className="rice-product-card">
                            <div className="rice-image-container">
                                <img src={rice.image} alt={rice.name} className="rice-image" />
                                <div className="rice-rating">
                                    <FaStar className="star-icon" /> {rice.rating}
                                </div>
                            </div>
                            <div className="rice-info">
                                <h3 className="rice-name">{rice.name}</h3>
                                <p className="rice-description">{rice.description}</p>
                                <div className="rice-footer">
                                    <span className="rice-price">₹{rice.price}/25kg</span>
                                    <div className="quantity-controls">
                                        {cart[rice.id] > 0 && (
                                            <>
                                                <button 
                                                    className="quantity-btn decrease"
                                                    onClick={() => decreaseQuantity(rice.id)}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className="quantity">{cart[rice.id]}</span>
                                            </>
                                        )}
                                        <button 
                                            className={`add-to-cart-btn ${cart[rice.id] > 0 ? 'added' : ''}`}
                                            onClick={() => addToCart(rice.id)}
                                        >
                                            {cart[rice.id] > 0 ? <FaPlus /> : <FaShoppingCart />}
                                            {cart[rice.id] > 0 ? '' : 'Add to Cart'}
                                        </button>
                                    </div>
                                    {cart[rice.id] > 0 && (
                                        <div className="cart-actions">
                                            <button 
                                                className="go-to-cart-btn"
                                                onClick={handleGoToCart}
                                            >
                                                Go to Cart
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopRice;