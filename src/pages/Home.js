import React from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import HomeSplash from "../components/HomeSplash";
import BioSplash from "../components/BioSplash";

const Home = () => {
    return (
        <div className='main-container'>
            <Header />
            <HomeSplash />
            <BioSplash />
        </div>
    );
};

export default Home;
