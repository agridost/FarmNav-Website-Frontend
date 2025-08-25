import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaStar, FaPlus, FaMinus, FaSpinner } from 'react-icons/fa';
import { FaBowlRice } from 'react-icons/fa6';
import './ShopRice.css';
import { useCart } from '../Cart/CartContext';

const ShopRice = () => {
    const navigate = useNavigate();
    const { cart, addToCart, decreaseQuantity } = useCart();
    const [riceVarieties, setRiceVarieties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRiceProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products/rice');
                if (!response.ok) {
                    throw new Error('Failed to fetch rice products');
                }
                const data = await response.json();
                if (data.success) {
                    setRiceVarieties(data.products);
                } else {
                    throw new Error(data.message || 'Failed to load products');
                }
            } catch (err) {
                setError(err.message);
                console.error('Error fetching rice products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchRiceProducts();
    }, []);

    const handleGoToCart = () => {
        navigate('/cart');
    };

    const handleAddToCart = (riceId) => {
        const product = riceVarieties.find(r => r.id === riceId);
        if (product) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image_url
            });
        }
    };

    const handleDecreaseQuantity = (riceId) => {
        decreaseQuantity(riceId);
    };

    if (loading) {
        return (
            <div className="shop-page-container">
                <div className="loading-container">
                    <FaSpinner className="spinner-icon" />
                    <p>Loading rice products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="shop-page-container">
                <div className="error-container">
                    <h2>Error loading products</h2>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()} className="retry-btn">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

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
                    {riceVarieties.length > 0 ? (
                        riceVarieties.map((rice) => (
                            <div key={rice.id} className="rice-product-card">
                                <div className="rice-image-container">
                                    <img 
                                        src={rice.image_url || '/images/default-rice.jpg'} 
                                        alt={rice.name} 
                                        className="rice-image" 
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/images/default-rice.jpg';
                                        }}
                                    />
                                    <div className="rice-rating">
                                        <FaStar className="star-icon" /> {rice.rating.toFixed(1)}
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
                                                        onClick={() => handleDecreaseQuantity(rice.id)}
                                                    >
                                                        <FaMinus />
                                                    </button>
                                                    <span className="quantity">{cart[rice.id]}</span>
                                                </>
                                            )}
                                            <button 
                                                className={`add-to-cart-btn ${cart[rice.id] > 0 ? 'added' : ''}`}
                                                onClick={() => handleAddToCart(rice.id)}
                                                disabled={rice.stock_quantity <= 0}
                                            >
                                                {rice.stock_quantity <= 0 ? (
                                                    'Out of Stock'
                                                ) : (
                                                    <>
                                                        {cart[rice.id] > 0 ? <FaPlus /> : <FaShoppingCart />}
                                                        {cart[rice.id] > 0 ? '' : 'Add to Cart'}
                                                    </>
                                                )}
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
                                    {rice.stock_quantity <= 5 && rice.stock_quantity > 0 && (
                                        <div className="low-stock">
                                            Only {rice.stock_quantity} left in stock!
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-products">
                            <p>No rice products available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopRice;