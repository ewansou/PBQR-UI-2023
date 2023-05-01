import React from "react";
import { useHistory } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import instantlysgLogo from "../images/instantlysg-logo.png";

const PaymentSuccessGIF = ({successColorBlockClass}) => {
    const history = useHistory();

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Redirecting back...</div>;
        }

        return (
            <div className="timer">
                <div className="value">{remainingTime}</div>
            </div>
        );
    };

    return (
        <div>
        <div className={successColorBlockClass}></div>
        <div className="paymentSuccessGIFDiv">
            <h1 className="paymentSuccessGIFText">PAYMENT SUCCESS</h1>
            <h1 className="paymentSuccessGIFThankYou">THANK YOU</h1>
            <h1 className="paymentSuccessGIFMessage">
                Photo taking session will begin shortly ...
            </h1>
            <span className="paymentSuccessGIFCountDown">
        <CountdownCircleTimer
            onComplete={() => {
                history.push("/");
                return [true, 1500];
            }}
            isPlaying
            duration={10} //20 seconds
            size={0}
            colors="#e3e3e3"
        >
          {renderTime}
        </CountdownCircleTimer>
      </span>
            <div className="paymentSuccessGIFLogoDiv">
                <p className="paymentSuccessGIFPresented">Presented to you by:</p>
                <img src={instantlysgLogo} className="paymentSuccessGIFLogo" />
            </div>
        </div>
        </div>
    );
}

export default PaymentSuccessGIF;
