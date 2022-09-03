import React from "react";
import Header from "../components/Header";
import HomeSplash from "../components/HomeSplash";
import BioSplash from "../components/BioSplash";
import WhyHire from "../components/WhyHire";
import "../styles/Home.scss";

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
