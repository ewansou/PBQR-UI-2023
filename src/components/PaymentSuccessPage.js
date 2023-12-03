import React from "react";
import { useHistory } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import instantlysgLogo from "../images/instantlysg-logo.png";

const PaymentSuccessPage = ({headerText, successColor}) => {
    const history = useHistory();

    const colorBlockColor = {
        background: successColor,
    };

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
        <div className="paymentSuccessPage_ColorBlock" style={colorBlockColor}></div>
        <div className="paymentSuccessPage_Div">
            <h1 className="paymentSuccessPage_SuccessText">{headerText}</h1>
            <h1 className="paymentSuccessPage_ThankYou">THANK YOU</h1>
            <h1 className="paymentSuccessPage_Message">
                Photo taking session will begin shortly ...
            </h1>
            <span className="paymentSuccessPage_CountDown">
        <CountdownCircleTimer
            onComplete={() => {
                history.push("/");
                return [true, 1500];
            }}
            isPlaying
            duration={10} //10 seconds
            size={0}
            colors="#e3e3e3"
        >
          {renderTime}
        </CountdownCircleTimer>
      </span>
            <div className="paymentSuccessPage_SuccessLogoDiv">
                <p className="paymentSuccessPage_Presented">Presented to you by:</p>
                <img src={instantlysgLogo} alt="" className="paymentSuccessPage_SucessLogo" />
            </div>
        </div>
        </div>
    );
}

export default PaymentSuccessPage;
