import React from "react";
import "../styles/Header.scss";
import LargeLogo from "../static/images/logo_large.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const iconStyling = {
    padding: "0 16px",
};

const IconStylingEnd = {
    paddingRight: "0px",
    paddingLeft: "16px",
};

const Header = () => {
    return (
        <div className='header_outer-container'>
            {/* contact bar */}
            <div className='header_contact-bar-container'>
                <div className='header_contact-bar'>
                    <div className='header_emergency-contact'>
                        In need of urgent assistance? Call (555) 555-5555
                    </div>
                    <div className='header_social-media'>
                        <FontAwesomeIcon
                            icon={faYoutube}
                            color='white'
                            size='1x'
                            style={iconStyling}
                        />
                        <FontAwesomeIcon
                            icon={faInstagram}
                            color='white'
                            size='1x'
                            style={iconStyling}
                        />
                        <FontAwesomeIcon
                            icon={faFacebook}
                            color='white'
                            size='1x'
                            style={IconStylingEnd}
                        />
                    </div>
                </div>
            </div>

            {/* navbar */}
            <div className='header_navbar'>
                <div className='header_nav-logo'>
                    <img src={LargeLogo} alt='Logo' width='60%' />
                </div>
                <div className='header_nav-buttons'>
                    <ul>
                        <li className='header_start-link'>
                            <span className='header_button'>Home</span>
                        </li>
                        <li>
                            <span className='header_button'>About Us</span>
                        </li>
                        <li>
                            <span className='header_button'>
                                Client Services
                            </span>
                        </li>
                        <li className='header_end-link'>
                            <span className='header_button'>Contact Us</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
