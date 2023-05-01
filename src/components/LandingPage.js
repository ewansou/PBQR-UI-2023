import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import landing2strips from "../images/landing-2strips.png";
import landing4strips from "../images/landing-4strips.png";
import landing6strips from "../images/landing-6strips.png";
import privancyclause from "../images/privacyclause.jpg";


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
                    <img src={privancyclause} alt="privancy clause"/>
                    </Grid>
                </Grid>
                {<Grid container item xs={6}>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                            <img src={landing2strips} alt="pay 10" className="landingImage"/>
                            <h1 className="landingPricing">$10</h1>
                            <a href="/gif2prints" className="landingSelect">
                                SELECT
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className="landingMiddleGrid">
                        <Paper elevation={0} className={classes.paper}>
                            <img src={landing4strips} className="landingImage"/>
                            <h1 className="landingPricing">$12</h1>
                            <a href="/gif4prints" className="landingSelect">
                                SELECT
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                            <img src={landing6strips} className="landingImage"/>
                            <h1 className="landingPricing">$14</h1>
                            <a href="/gif6prints" className="landingSelect">
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