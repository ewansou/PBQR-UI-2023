import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LandingSelectionTile from "./LandingSelectionTile";
import {
    BOTTOM_OPTION_AMOUNT,
    BOTTOM_OPTION_DESCRIPTION,
    BOTTOM_OPTION_HEADERTEXT,
    BOTTOM_OPTION_URL,
    ENABLE_PROMO,
    MIDDLE_OPTION_AMOUNT,
    MIDDLE_OPTION_DESCRIPTION,
    MIDDLE_OPTION_HEADERTEXT,
    MIDDLE_OPTION_URL,
    PRIVACY_CLAUSE,
    TOP_OPTION_AMOUNT,
    TOP_OPTION_DESCRIPTION,
    TOP_OPTION_HEADERTEXT,
    TOP_OPTION_URL
} from "../config/constants";
import { useHistory } from "react-router-dom";

function PayToUseLandingPage() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            flex: 1,
            textAlign: "center",
        },
    }));

    const classes = useStyles();
    const history = useHistory();
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
                <Grid container item xs={6} className="payToUseLandingPage_Left">
                    <Grid item xs={12} container={true}>
                        <div
                            className={"payToUseLandingPage_PrivacyClause"}
                            dangerouslySetInnerHTML={{ __html: PRIVACY_CLAUSE }}
                        ></div>
                        {ENABLE_PROMO ? (
                            <button
                                className="payToUseLandingPage_BackButton"
                                onClick={handleBackButtonClick}
                            >
                                BACK TO MAIN MENU
                            </button>
                        ) : null}
                    </Grid>
                </Grid>
                {
                    <Grid container item xs={6}>
                        <Grid item xs={12}>
                            <Paper elevation={0} className={classes.paper}>
                                <LandingSelectionTile
                                    headerText={TOP_OPTION_HEADERTEXT}
                                    description={TOP_OPTION_DESCRIPTION}
                                    amount={TOP_OPTION_AMOUNT}
                                    url={TOP_OPTION_URL}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className="payToUseLandingPage_LandingMiddleGrid">
                            <Paper elevation={0} className={classes.paper}>
                                <LandingSelectionTile
                                    headerText={MIDDLE_OPTION_HEADERTEXT}
                                    description={MIDDLE_OPTION_DESCRIPTION}
                                    amount={MIDDLE_OPTION_AMOUNT}
                                    url={MIDDLE_OPTION_URL}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className="payToUseLandingPage_LandingMiddleGrid">
                            <Paper elevation={0} className={classes.paper}>
                                <LandingSelectionTile
                                    headerText={BOTTOM_OPTION_HEADERTEXT}
                                    description={BOTTOM_OPTION_DESCRIPTION}
                                    amount={BOTTOM_OPTION_AMOUNT}
                                    url={BOTTOM_OPTION_URL}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </div>
    );
}

export default PayToUseLandingPage;