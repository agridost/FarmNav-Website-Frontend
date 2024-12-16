import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Goals.css';
import Mission from './Mission';
import Vision from './Vision';
import Values from './Values';

const Goals = () => {
  const [active, setActive] = useState("values");

  const renderComponent = () => {
    if (active === "values") return <Values />;
    if (active === "mission") return <Mission />;
    if (active === "vision") return <Vision />;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add active class for animation on scroll down
          } else {
            entry.target.classList.remove('active'); // Remove active class when out of view (scroll up)
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    const elements = document.querySelectorAll('.goals > div');
    elements.forEach(element => {
      observer.observe(element); // Observe each section for scroll animation
    });

    // Clean up observer on unmount
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="goals">
      <div>
        <a className="bttn" onClick={() => setActive("values")}><span>Values</span></a>
        <a className="bttn" onClick={() => setActive("mission")}><span>Mission</span></a>
        <a className="bttn" onClick={() => setActive("vision")}><span>Vision</span></a>
      </div>
      <div>
        <SwitchTransition>
          <CSSTransition
            key={active}
            timeout={500} /* Duration matches the CSS transition */
            classNames="fade"
          >
            {renderComponent()}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default Goals;
