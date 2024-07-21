import React from "react";
import { Link } from "wouter";
import { useSpring, animated } from '@react-spring/web';
import "../styles/Game.css";

import EdurLogo from "../images/edur_logo.png";
import WorkedImg from "../images/WorkedImg.png";
import LeftMonster from "../images/left-monster.png";
import RightMonster from "../images/right-monster.png";

const Game1 = () => {
    const springProps = useSpring({
        from: {
            backgroundSize: '275%',
            backgroundPositionX: '65%',
            backgroundPositionY: '75%',
        },
        to: {
            backgroundSize: '225%',
            backgroundPositionX: '75%',
            backgroundPositionY: '85%',
        },
        config: { duration: 1000 },
    });

    const leftMonsterSpringProps = useSpring({
        from: { width: '400px' },
        to: { width: '300px' },
        config: { duration: 1000 },
    });

    const rightMonsterSpringProps = useSpring({
        from: { transform: 'translateY(0%)' },
        to: { transform: 'translateY(-100%)' },
        config: { duration: 750 },
    });

    return (
        <animated.div
            className="game"
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative',
                color: '#fff',
                background: `url(${WorkedImg}) no-repeat center center fixed`,
                backgroundSize: springProps.backgroundSize,
                backgroundPositionX: springProps.backgroundPositionX,
                backgroundPositionY: springProps.backgroundPositionY,
            }}
        >
            <animated.img
                src={LeftMonster}
                className="left-monster"
                style={{ position: 'absolute', bottom: 0, left: '0%', width: leftMonsterSpringProps.width }}
                alt="Left Monster"
            />
            <animated.img
                src={RightMonster}
                className="right-monster"
                style={{ position: 'absolute', top: 0, right: 0, width: '300px', ...rightMonsterSpringProps }}
                alt="Right Monster"
            />
            <div className="content">
                <img src={EdurLogo} className="logo" alt="Edurino Logo" />
                <h1>Game 1</h1>
                <p>Content for Game 1</p>
                <Link to="/thankyou">
                    <button>Finish Game</button>
                </Link>
            </div>
        </animated.div>
    );
};

export default Game1;
