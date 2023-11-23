import React, {useRef, useState} from "react";
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
            'A B C {bksp}',
            '1 2 3 4',
            '5 6 7 8'
        ]
    };

    const onChange = input => {
        setInput(input);
        console.log("Input changed", input);
        setErrorMessage('');
    };

    const onKeyPress = button => {
        console.log("Button pressed", button);
        //if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const onChangeInput = event => {
        const input = event.target.value;
        setInput(input);
        keyboard.current.setInput(input);
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
                            onClick={() => history.push("/")}
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