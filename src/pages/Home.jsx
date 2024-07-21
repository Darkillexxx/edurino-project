import React from "react";
import { useLocation } from "wouter";
import "../styles/Home.css";

import EdurLogo from "../images/edur_logo.png";
import TigerSVG from "../images/Tiger_SVG.svg";
import CatSVG from "../images/Cat_SVG.svg";

const Home = () => {
    const [location, setLocation] = useLocation();
    return (
        <div className="home">
            <img src={EdurLogo} className="logo" alt="Edurino Logo" />
            <h2 className="main-heading">Welcome to Edurino Testing</h2>
            <button className="start-button" onClick={() => setLocation("/games")}>
                <h2 className="game-text">Game Your Brain!!!</h2>
                <p className="click-text">Click here to start</p>
            </button>
            <div className="characters">
                <img src={TigerSVG} className="character" alt="Tiger Character" />
                <img src={CatSVG} className="character" alt="Cat Character" />
            </div>
        </div>
    );
};

export default Home;
