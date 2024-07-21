import React, { useState } from 'react';
import { useSpring, animated, useTransition } from '@react-spring/web';
import { Link } from "wouter";
import "../styles/GameSelection.css";

import EdurLogo from "../images/edur_logo.png";
import LesenSchreiben from "../images/lesen_schreiben.png";
import UnsereNatur from "../images/unsere_natur.png";
import ZahlenRechnen from "../images/zahlen_rechnen.png";
import LeftMonster from "../images/left-monster.png";
import RightMonster from "../images/right-monster.png";

const GameSelection = () => {
    const [showContent, setShowContent] = useState(false);

    const springProps = useSpring({
        from: {
            backgroundSize: '100%',
            backgroundPositionX: '50%',
            backgroundPositionY: '50%',
        },
        to: {
            backgroundSize: '275%',
            backgroundPositionX: '65%',
            backgroundPositionY: '75%',
        },
        config: { duration: 1000 },
        onRest: () => setShowContent(true),
    });

    const leftMonsterProps = useSpring({
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0%)' },
        config: { duration: 1000 },
    });

    const rightMonsterProps = useSpring({
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0%)' },
        config: { duration: 1000 },
    });

    const contentTransitions = useTransition(showContent, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 750 },
    });

    return (
        <animated.div
            className="game-selection"
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                color: '#fff',
                background: `url('src/images/WorkedImg.png') no-repeat center center fixed`,
                backgroundSize: springProps.backgroundSize,
                backgroundPositionX: springProps.backgroundPositionX,
                backgroundPositionY: springProps.backgroundPositionY,
            }}
        >
            <img src={EdurLogo} className="logo" alt="Edurino Logo" />
            {contentTransitions((style, item) =>
                item ? (
                    <animated.div style={style} className="content">
                        <div className="info">
                            <h2>For parents</h2>
                            <h3 className="wide-text">Your child can choose from these educational games</h3>
                            <ul>
                                <li><strong>Numbers and Arithmetic:</strong> Builds math skills</li>
                                <li><strong>Reading and Writing:</strong> Enhances literacy</li>
                                <li><strong>Our Nature:</strong> Explores natural sciences</li>
                            </ul>
                            <p className="small-text">Note: This demo includes a few subjects. Find more in the full version!</p>
                        </div>
                        <div className="games-section">
                            <h2 className="games-title">Choose your game to test</h2>
                            <div className="games">
                                <Link to="/games/game1">
                                    <div className="game-option">
                                        <img src={LesenSchreiben} className="game-image" alt="Lesen & Schreiben" />
                                    </div>
                                </Link>
                                <Link to="/games/game2">
                                    <div className="game-option">
                                        <img src={UnsereNatur} className="game-image" alt="Unsere Natur" />
                                    </div>
                                </Link>
                                <Link to="/games/game3">
                                    <div className="game-option">
                                        <img src={ZahlenRechnen} className="game-image" alt="Zahlen & Rechnen" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </animated.div>
                ) : null
            )}
            <animated.img
                src={LeftMonster}
                className="left-monster"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '0%',
                    width: '400px',
                    height: 'auto',
                    ...leftMonsterProps,
                }}
                alt="Left Monster"
            />
            <animated.img
                src={RightMonster}
                className="right-monster"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '300px',
                    height: 'auto',
                    ...rightMonsterProps,
                }}
                alt="Right Monster"
            />
        </animated.div>
    );
};

export default GameSelection;
