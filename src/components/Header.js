import React from 'react';
import '../styles/Header.scss';
import LargeLogo from '../static/images/logo_large.jpg';

const Header = () => {
    return (
        <div className='header_main-container'>
            <div className='header_contact-bar'>
                <div className='header_emergency-contact'>
                    In need of urgent assistance? Call (555) 555-5555
                </div>
                <div className='header_social-media'>Social Logos</div>
            </div>
            <div className='header_navbar'>
                <div className='header_nav-logo'>
                    <img src={LargeLogo} alt='Logo' />
                </div>
                <div className='header_nav-buttons'></div>
            </div>
        </div>
    );
};

export default Header;
