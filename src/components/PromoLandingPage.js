import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import ClipLoader from "react-spinners/ClipLoader";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import {css} from "@emotion/react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {API_BASE} from "../config/constants";

const PromoLandingPage = ({clause, paymentAmount, paymentSuccessURL, printCount, imagePath}) => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            flex: 1,
            textAlign: "center",
        },
    }));
    const classes = useStyles(); //Required for making styles
    const history = useHistory(); //Required for redirection
    const [textInput, setTextInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
        setErrorMessage('');
};

    const handleButtonClick = () => {
        let apiURL = API_BASE + '/redeemPromoCode';

        axios.post(apiURL, { textInput })
            .then(response => {
                console.log('API response:', response.data);
            })
            .catch(error => {
                console.error('API error:', error);
            });
    };

    useEffect(() => {
        // You can add additional logic that runs on component mount or when textInput changes
        // For example, you might want to validate the input, etc.
    }, [textInput]);


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
                                value={textInput}
                                onChange={handleInputChange}
                            />
                            <p className="promoLandingPage_ErrorMessage">{errorMessage}</p>
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
                        <div className={"promoLandingPage_PrivacyClause"}>
                            <p>By making payment and utilising this photo booth service, you agree to the below</p>
                            <p>(1) You consent to the collection, use and sharing of your photos for marketing
                                purposes. The companies (Instantly Singapore Pte Ltd and Apollo Entertainment Media
                                Pte. Ltd may use your photos in their marketing materials, including but not limited
                                to social media, website, and print advertisements. Your photos will not be
                                shared with third parties for marketing purposes.</p>
                            <p>(2) The email address you entered is soley for the purpose of sending you the
                                soft copies of your photos to you. Your email address will not be shared with
                                any third parties and will also not be used for any marketing purposes.</p>
                            <p>(3) In order to protect our equipment, a CCTV has been installed to monitor usage
                                at the photo booth. You consent to having your usage footage recorded for this
                                purpose.</p>
                            <p>(3) The company is not liable for any injury, damage, or loss that may occur
                                during the photo booth session. Please use the photo booth with care and at your
                                own risk.</p>
                            <p>(4) You consent to waive all rights to inspect or approve any photographs taken.</p>
                            <p>If you are do not consent to any of the above clause, please do not proceed
                                to use this photo booth.</p>
                        </div>

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