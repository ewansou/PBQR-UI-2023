import React from "react";
import {makeStyles} from "@material-ui/core/styles";
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
    TOP_OPTION_AMOUNT,
    TOP_OPTION_DESCRIPTION,
    TOP_OPTION_HEADERTEXT,
    TOP_OPTION_URL
} from "../config/constants";
import {useHistory} from "react-router-dom";

function PayToUseLandingPage() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            flex: 1,
            textAlign: 'center',
        },
    }));

    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid container item xs={6} className="payToUseLandingPage_Left">
                    <Grid item xs={12} container={true}>
                        <div className={"payToUseLandingPage_PrivacyClause"}>
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

                        {ENABLE_PROMO ? (
                            <button
                                className="payToUseLandingPage_BackButton"
                                onClick={() => history.push("/")}
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