import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {API_BASE, PRIVACY_CLAUSE} from "../config/constants";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const PromoLandingPage = ({clause, paymentAmount, paymentSuccessURL, printCount, imagePath}) => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            flex: 1,
            textAlign: "center",
        },
    }));
    const classes = useStyles(); //Required for making styles
    const history = useHistory(); //Required for redirection
    const [errorMessage, setErrorMessage] = useState('');
    const [input, setInput] = useState("");
    const keyboard = useRef();
    const layout = {
        'default': [
            '0 1 2',
            '3 4 5',
            '6 7 8',
            '9 {bksp}',
        ]
    };

    const onChange = input => {
        setInput(input);
        setErrorMessage('');
        handleActivity();
    };

    const onKeyPress = button => {
        //if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const onChangeInput = event => {
        const input = event.target.value;
        setInput(input);
        keyboard.current.setInput(input);
        handleActivity();
    };
    /*    const handleInputChange = (event) => {
            setTextInput(event.target.value);
            setErrorMessage('');
        };*/

    const handleButtonClick = () => {
        let apiURL = API_BASE + '/promoCode';

        axios.post(apiURL, input, {
            headers: {
                'Content-Type': 'text/plain'
            }
        }).then(response => {
            console.log('API response:', response.data);
            if (response.data.includes("Valid")) {
                console.log("Promo code is valid");
                history.push("/promosuccess");
            } else if (response.data.includes("Invalid")) {
                console.error("Invalid promo code");
                setErrorMessage(response.data);
            } else {
                // Handle other cases if needed
            }
        }).catch(error => {
            console.error('API error:', error);
        });
    };

    const inactivityTimer = useRef(null);

    const startInactivityTimer = () => {
        return setTimeout(() => {
            // Inactivity timeout reached, navigate to the main page
            history.push("/");
        }, 10000); // 10 seconds in milliseconds
    };

    const resetInactivityTimer = () => {
        clearTimeout(inactivityTimer.current);
        inactivityTimer.current = startInactivityTimer();
    };

    const handleBackButtonClick = () => {
        // Reset inactivity timer when the back button is clicked
        resetInactivityTimer();
        history.push("/");
    };

    const handleActivity = () => {
        // Reset inactivity timer on user activity
        resetInactivityTimer();
    };

    useEffect(() => {
        console.log("Inactivity useEffect hook is running");

        // Start the initial inactivity timer
        resetInactivityTimer();

        const handleMouseMove = () => {
            handleActivity();
        };

        const handleKeyDown = () => {
            handleActivity();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            console.log("Inactivity Cleanup: Removing event listeners");
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("keydown", handleKeyDown);
            // Clear inactivity timer on component unmount
            clearTimeout(inactivityTimer.current);
        };
    }, []); // No dependencies to ensure the effect runs once

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid container item xs={6}>
                    <Grid item xs={12} container={true}>
                        <div className={"promoLandingPage_Left"}>
                            <h1 className={"promoLandingPage_PageTitle"}>Enter your promo below</h1>
                            <input
                                id="text-input"
                                type="text"
                                value={input}
                                onChange={onChangeInput}
                            />
                            {errorMessage && <p className="promoLandingPage_ErrorMessage">{errorMessage}</p>}
                            <Keyboard
                                keyboardRef={r => (keyboard.current = r)}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                layout={layout}
                            />
                            <button
                                className="promoLandingPage_SubmitButton"
                                onClick={handleButtonClick}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container item xs={6} className="promoLandingPage_Right">
                    <Grid item xs={12} container={true}>
                        <div className={"promoLandingPage_PrivacyClause"}
                             dangerouslySetInnerHTML={{ __html: PRIVACY_CLAUSE }}></div>
                        <button
                            className="promoLandingPage_BackButton"
                            onClick={handleBackButtonClick}
                        >
                            BACK TO MAIN MENU
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default PromoLandingPage;