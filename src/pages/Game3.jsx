import React, { useState } from "react";
import { Link } from "wouter";
import { useSpring, animated, useTransition } from '@react-spring/web';
import "../styles/Game.css";

import EdurLogo from "../images/edur_logo.png";
import WorkedImg from "../images/WorkedImg.png";
import LeftMonster from "../images/left-monster.png";
import RightMonster from "../images/right-monster.png";
import GameBackground from "../images/game_back.png";
import Question from "../images/question.png";
import Wrong1 from "../images/wrong1.png";
import Correct from "../images/correct.png";
import Wrong2 from "../images/wrong2.png";
import Monster1 from "../images/monster1.png";
import Monster2 from "../images/monster2.png";
import Monster3 from "../images/monster3.png";
import Monster4 from "../images/monster4.png";
import Monster5 from "../images/monster5.png";
import Monster6 from "../images/monster6.png";

const MathGame = () => {
    const [showContent, setShowContent] = useState(false);

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
        onRest: () => setShowContent(true),
    });

    const leftMonsterSpringProps = useSpring({
        from: { width: '400px', left: '0%' },
        to: { width: '300px', left: '5%' },
        config: { duration: 1000 },
    });

    const rightMonsterSpringProps = useSpring({
        from: { transform: 'translateY(0%)' },
        to: { transform: 'translateY(-100%)' },
        config: { duration: 750 },
    });

    const contentTransitions = useTransition(showContent, {
        from: { opacity: 0, transform: 'translateY(20px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(20px)' },
        config: { duration: 750 },
    });

    const additionalTransitions = useTransition(showContent, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 750 },
    });

    return (
        <animated.div
            className="math-game"
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
                className="math-game-left-monster"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    ...leftMonsterSpringProps,
                }}
                alt="Left Monster"
            />
            <animated.img
                src={RightMonster}
                className="math-game-right-monster"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '300px',
                    ...rightMonsterSpringProps,
                }}
                alt="Right Monster"
            />
            {contentTransitions((style, item) =>
                item ? (
                    <animated.div style={style} className="math-game-content">
                        <div className="math-game-info">
                            <h2>Numbers and Arithmetic</h2>
                            <p className="description"><strong>Description:</strong> Develops problem-solving and numerical skills through fun challenges, teaching arithmetic and logical thinking</p>
                            <p className="educational-value"><strong>Educational Value:</strong> Builds math foundation, critical thinking, and problem-solving abilities</p>
                            <p className="activities"><strong>Activities:</strong> Counting games, addition subtraction, pattern recognition, and puzzles</p>
                        </div>
                        <div className="math-game-section">
                            <h1 className="math-game-title">Math Game</h1>
                            <div className="math-game-rectangle">
                                <img className="math-game-background" src={GameBackground} alt="Game Background" />
                            </div>
                        </div>
                    </animated.div>
                ) : null
            )}
            {additionalTransitions((style, item) =>
                item ? (
                    <>
                        <animated.img style={style} src={Question} className="question" alt="Question" />
                        <animated.button
                            className="wrong1"
                            style={{ top: '515px', left: '870px', width: '60px', height: '50px', ...style }}
                            onClick={() => alert('Wrong answer!')}
                        >
                            <img src={Wrong1} alt="Wrong1" className="button-img" />
                        </animated.button>
                        <Link to="/thankyou">
                            <animated.button
                                className="correct"
                                style={{ top: '511px', left: '975px', width: '60px', height: '50px', ...style }}
                            >
                                <img src={Correct} alt="Correct" className="button-img" />
                            </animated.button>
                        </Link>
                        <animated.button
                            className="wrong2"
                            style={{ top: '509px', left: '1080px', width: '60px', height: '50px', ...style }}
                            onClick={() => alert('Wrong answer!')}
                        >
                            <img src={Wrong2} alt="Wrong2" className="button-img" />
                        </animated.button>
                        <animated.div style={style} className="math-game-bottom-content">
                            <img src={EdurLogo} className="math-game-logo" alt="Edurino Logo" />
                        </animated.div>
                        <animated.img style={{ top: '500px', left: '1000px', width: '60px', height: '55px', zIndex: 22, ...style }} src={Monster1} className="monster" alt="Monster 1" />
                        <animated.img style={{ top: '450px', left: '1215px', width: '75px', height: '75px', zIndex: 22, ...style }} src={Monster2} className="monster" alt="Monster 2" />
                        <animated.img style={{ top: '410px', left: '1450px', width: '65px', height: '65px', zIndex: 22, ...style }} src={Monster3} className="monster" alt="Monster 3" />
                        <animated.img style={{ top: '360px', left: '1510px', width: '60px', height: '60px', zIndex: 22, ...style }} src={Monster4} className="monster" alt="Monster 4" />
                        <animated.img style={{ top: '550px', left: '1500px', width: '60px', height: '60px', zIndex: 22, ...style }} src={Monster5} className="monster" alt="Monster 5" />
                        <animated.img style={{ top: '525px', left: '1550px', width: '60px', height: '50px', zIndex: 22, ...style }} src={Monster6} className="monster" alt="Monster 6" />
                    </>
                ) : null
            )}
        </animated.div>
    );
};

export default MathGame;
