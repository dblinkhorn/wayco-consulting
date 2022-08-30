import React from "react";
import BaseButton from "../components/ui-elements/BaseButton";
import "../styles/HomeSplash.scss";

const HomeSplash = () => {
    return (
        <div className='home-splash_outer-container'>
            <div className='home-splash_inner-container'>
                <div className='home-splash_tagline-container'>
                    <span className='home-splash_tagline'>
                        Providing New School Solutions
                        <br /> with Old School Values
                    </span>
                    <span className='home-splash_sub-tagling'>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus, qui blanditiis praesentium voluptatum deleniti
                        atque corrupti.
                    </span>
                </div>
                <div className='home-splash_button-container'>
                    <div className='home-splash_button'>
                        <BaseButton text='FIND OUT MORE' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSplash;
