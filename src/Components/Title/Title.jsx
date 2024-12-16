import React, { useEffect, useRef, useState } from 'react';
import './Title.css';

const Title = ({ subTitle, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility to true when title section is in view
          } else {
            setIsVisible(false); // Optionally reset visibility when out of view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Clean up observer on unmount
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div ref={titleRef} className={`title ${isVisible ? 'active' : ''}`}>
      <p>{subTitle}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default Title;
