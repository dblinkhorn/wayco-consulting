import React from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import HomeSplash from "../components/HomeSplash";

const Home = () => {
    return (
        <div className='main-container'>
            <Header />
            <HomeSplash />
        </div>
    );
};

export default Home;