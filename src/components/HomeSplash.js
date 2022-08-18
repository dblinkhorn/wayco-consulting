import React from "react";
import BaseButton from "../components/ui-elements/BaseButton";
import "../styles/HomeSplash.scss";

const HomeSplash = () => {
    return (
        <div className='home-splash_outer-container'>
            <div className='home-splash_inner-container'>
                <div className='home-splash_tagline-container'>
                    <span className='home-splash_tagline'>
                        Helping You Solve Your Biggest
                        <br /> Challenges With Strategy
                    </span>
                    <BaseButton button_text='Test Button' />
                </div>
            </div>
        </div>
    );
};

export default HomeSplash;
