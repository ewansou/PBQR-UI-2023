import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import payPerUseIcon from '../images/pay-to-use-landing-page-icon.png';
import promoIcon from '../images/promo-landing-page-icon.png';
import {useHistory} from "react-router-dom";

function PromoWithPayPerUseLandingPage() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            flex: 1,
            textAlign: 'center',
        },
    }));

    const history = useHistory();

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid container item xs={6} className="promoWithPayToUseLandingPage_Left">
                    <Grid item xs={12} container={true}>
                        <div className="promoWithPayToUseLandingPage_LeftDiv">
                            <h1 className="promoWithPayToUseLanding_PageTitle">Using a Promo Code?</h1>
                            <p className="promoWithPayToUseLanding_PageSubTitle">Enter it to use the photo booth for free!</p>
                            <img
                                src={promoIcon}
                                className="promoWithPayToUseLandingPage_Image"
                            />
                            <button
                                className="promoWithPayToUseLandingPage_NextButton"
                                onClick={() => history.push("/promoredemptionpage")}
                            >
                                NEXT
                            </button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container item xs={6} className="promoWithPayToUseLandingPage_Left">
                    <Grid item xs={12} container={true}>
                        <div className="promoWithPayToUseLandingPage_LeftDiv">
                            <h1 className="promoWithPayToUseLanding_PageTitle">Pay To Use</h1>
                            <p className="promoWithPayToUseLanding_PageSubTitle">Enjoy our photo booth from $10</p>
                            <img
                                src={payPerUseIcon}
                                className="promoWithPayToUseLandingPage_Image"
                            />
                            <button
                                className="promoWithPayToUseLandingPage_NextButton"
                                onClick={() => history.push("/paytouselandingpage")}
                            >
                                NEXT
                            </button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default PromoWithPayPerUseLandingPage;