import React from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import HomeSplash from "../components/HomeSplash";
import BioSplash from "../components/BioSplash";
import WhyHire from "../components/WhyHire";

const Home = () => {
    return (
        <div className='home_outer-container'>
            <Header />
            <HomeSplash />
            <BioSplash />
            <WhyHire />
        </div>
    );
};

export default Home;
