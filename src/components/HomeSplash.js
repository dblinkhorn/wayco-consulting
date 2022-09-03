import React from "react";
import BaseButton from "../components/ui-elements/BaseButton";
import "../styles/HomeSplash.scss";

const HomeSplash = () => {
    const buttonStyles = {
        backgroundColor: "#09a0dc",
        padding: "15px",
        color: "white",
        fontWeight: "bold",
        letterSpacing: "3px",
        cursor: "pointer",
    };

    return (
        <div className='home-splash_outer-container'>
            <div className='home-splash_inner-container'>
                <div className='home-splash_tagline-container'>
                    <span className='home-splash_tagline'>
                        Providing New School Solutions to Emergency Preparedness
                        Using Old School Values
                    </span>
                </div>
                <div className='home-splash_button-container'>
                    <div className='home-splash_button'>
                        <BaseButton
                            styles={buttonStyles}
                            text='FIND OUT MORE'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSplash;
