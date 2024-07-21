import React from "react";
import { useSpring, animated } from '@react-spring/web';
import "../styles/ThankYou.css";

import EdurLogo from "../images/edur_logo.png";
import WorkedImg from "../images/WorkedImg.png";
import FoxCharacter from "../images/fox.png";
import QrCloud from "../images/qrcloud.png";
import QrCode from "../images/qr.png";

const ThankYou = () => {
    const springProps = useSpring({
        from: {
            backgroundSize: '225%',
            backgroundPositionX: '75%',
            backgroundPositionY: '85%',
        },
        to: {
            backgroundSize: '225%',
            backgroundPositionX: '100%',
            backgroundPositionY: '10%',
        },
        config: { duration: 1500 },
    });

    return (
        <animated.div
            className="thank-you"
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
            <div className="content">
                <img src={EdurLogo} className="logo" alt="Edurino Logo" />
                <div className="text-container">
                    <h1>Thank You for Testing!!!</h1>
                    <h2>Here's Your Discount Coupon!</h2>
                </div>
                <img src={QrCloud} className="qr-cloud" alt="QR Cloud" />
                <img src={QrCode} className="qr-code" alt="QR Code" />
                <img src={FoxCharacter} className="fox-character" alt="Fox Character" />
            </div>
        </animated.div>
    );
};

export default ThankYou;
