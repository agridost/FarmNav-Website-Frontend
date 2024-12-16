import React, { useEffect } from 'react';
import './Contact.css';
import msg_icon from '../../Assets/msg-icon.png';
import mail_icon from '../../Assets/mail-icon.png';
import phone_icon from '../../Assets/phone-icon.png';
import loc_icon from '../../Assets/location-icon.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2f2144d8-47e1-4086-8ed3-7df5f84c4b9a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    // Scroll-triggered animation
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

        const elements = document.querySelectorAll('.contact-col');
        elements.forEach(element => {
            observer.observe(element); // Observe each contact column
        });

        // Clean up observer on unmount
        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="message icon" /></h3>
                <p>We're here to help! Whether you have questions, need support, or just want to learn more about our services, feel free to reach out to us. We're looking forward to connecting with you.</p>
                <ul>
                    <li><img src={mail_icon} alt="mail icon" />contact@farmnav.in</li>
                    <li><img src={phone_icon} alt="phone icon" />+91 7259587730</li>
                    <li><img src={loc_icon} alt="location icon" />#479, 10th Cross, 1st Phase, Vijayanagar 4th Stage, Mysuru, Karnataka</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your Name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your Phone Number' required />
                    <label>Email</label>
                    <input type="email" name='email' placeholder='Enter your Email' />
                    <label>Write your message here</label>
                    <textarea name="message" rows='6' placeholder='Type your message' required></textarea>
                    <button type='submit' className='sbtn'>Submit Now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
