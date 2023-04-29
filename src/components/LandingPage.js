import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LandingPageCarousel from "./Carousel";
import landing2strips from "../images/landing-2strips.png";

function LandingPage() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            flex: 1,
            textAlign: "center",
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid container item xs={6} className="landingLeft">
                    <Grid item xs={12} container={true}>
                        <Paper elevation={0} className={classes.paper}>
                            <LandingPageCarousel />
                        </Paper>
                    </Grid>
                </Grid>
{               <Grid container item xs={6}>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                            <img src={landing2strips} alt="pay 10" className="landingImage" />
                            <h1 className="landingPricing">$10</h1>
                            <a href="/gif2prints" className="landingSelect">
                                SELECT
                            </a>
                        </Paper>
                    </Grid>
                </Grid>}
            </Grid>
        </div>
    );
}

export default LandingPage;