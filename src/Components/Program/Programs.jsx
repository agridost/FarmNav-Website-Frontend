import React, { useEffect } from 'react';
import './Programs.css';
// import prgm1 from '../../Assets/2.jpg';
// import prgm2 from '../../Assets/3.jpg';
// import prgm3 from '../../Assets/4.jpg';

const Programs = () => {
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

        const elements = document.querySelectorAll('.program');
        elements.forEach(element => {
            observer.observe(element); // Observe each program
        });

        // Clean up observer on unmount
        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className='programs'>
            <div className="program">
                <img src={prgm1} alt="Farm" />
                <div className="caption">
                    <h2>Farm</h2>
                </div>
            </div>
            <div className="program">
                <img src={prgm2} alt="to" />
                <div className="caption">
                    <h2>to</h2>
                </div>
            </div>
            <div className="program">
                <img src={prgm3} alt="Table" />
                <div className="caption">
                    <h2>Table</h2>
                </div>
            </div>
        </div>
    );
};

export default Programs;
