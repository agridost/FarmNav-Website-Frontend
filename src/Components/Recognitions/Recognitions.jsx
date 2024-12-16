import React, { useState } from 'react';
import './Recognitions.css';
import StartupIndia from '../../Assets/Recognition.jpg';

const Recognitions = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="recognition-container">
      <div className="image-container" onClick={handleImageClick}>
        <img src={StartupIndia} alt="Certificate" />
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>X</button>
            <img src={StartupIndia} alt="Certificate" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Recognitions;
