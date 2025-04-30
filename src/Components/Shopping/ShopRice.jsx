import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaStar } from 'react-icons/fa';
import './ShopRice.css';
import { FaBowlRice } from 'react-icons/fa6';
import basmatiImg from '../../Assets/basmati.jpg';
import jasmineImg from '../../Assets/jasmine.jpg';
import brownImg from '../../Assets/brown.jpg';

const ShopRice = () => {
    const navigate = useNavigate();

    const riceVarieties = [
        {
            id: 1,
            name: "Basmati Rice",
            description: "Premium long-grain aromatic rice with delicate flavor",
            price: "₹1500/25kg",
            rating: 4.8,
            image: basmatiImg
        },
        {
            id: 2,
            name: "Jasmine Rice",
            description: "Fragrant long-grain rice with subtle floral aroma",
            price: "₹1200/25kg",
            rating: 4.6,
            image: jasmineImg
        },
        {
            id: 3,
            name: "Brown Rice",
            description: "Whole grain rice with nutty flavor and chewy texture",
            price: "₹1400/25kg",
            rating: 4.5,
            image: brownImg
        }
        // {
        //     id: 4,
        //     name: "Wild Rice",
        //     description: "Nutritious aquatic grass seed with earthy flavor",
        //     price: "$6.99/lb",
        //     rating: 4.7,
        //     image: "https://cdn.pixabay.com/photo/2018/04/13/17/14/rice-3317231_1280.jpg"
        // },
        // {
        //     id: 5,
        //     name: "Black Rice",
        //     description: "Ancient grain with antioxidant properties and nutty taste",
        //     price: "$5.49/lb",
        //     rating: 4.9,
        //     image: "https://cdn.pixabay.com/photo/2018/01/29/07/11/food-3114945_1280.jpg"
        // },
        // {
        //     id: 6,
        //     name: "Sushi Rice",
        //     description: "Short-grain rice with sticky texture perfect for sushi",
        //     price: "$3.49/lb",
        //     rating: 4.4,
        //     image: "https://cdn.pixabay.com/photo/2015/09/16/20/10/rice-943245_1280.jpg"
        // }
    ];

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
                                    <span className="rice-price">{rice.price}</span>
                                    <button className="add-to-cart-btn">
                                        <FaShoppingCart /> Add to Cart
                                    </button>
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