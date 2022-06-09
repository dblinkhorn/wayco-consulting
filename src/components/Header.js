import React from "react";
import "../styles/Header.scss";
import LargeLogo from "../static/images/logo_large.jpg";

const Header = () => {
    return (
        <div className='header_main-container'>
            {/* contact bar */}
            <div className='header_contact-bar'>
                <div className='header_emergency-contact'>
                    In need of urgent assistance? Call (555) 555-5555
                </div>
                <div className='header_social-media'>Social Logos</div>
            </div>

            {/* navbar */}
            <div className='header_navbar'>
                <div className='header_nav-logo'>
                    <img src={LargeLogo} alt='Logo' />
                </div>
                <div className='header_nav-buttons'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Client Services</li>
                        <li>News & Events</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
