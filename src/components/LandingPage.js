import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import privancyclause from "../images/privacyclause.jpg";
import LandingSelectionTile from "./LandingSelectionTile";
import {
    BOTTOM_OPTION_AMOUNT,
    BOTTOM_OPTION_DESCRIPTION,
    BOTTOM_OPTION_HEADERTEXT,
    BOTTOM_OPTION_URL,
    MIDDLE_OPTION_AMOUNT,
    MIDDLE_OPTION_DESCRIPTION,
    MIDDLE_OPTION_HEADERTEXT,
    MIDDLE_OPTION_URL,
    TOP_OPTION_AMOUNT,
    TOP_OPTION_DESCRIPTION,
    TOP_OPTION_HEADERTEXT,
    TOP_OPTION_URL
} from "../config/constants";

function LandingPage() {
    const useStyles = makeStyles((theme) => ({
        paper: {
            flex: 1,
            textAlign: 'center',
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid container item xs={6} className="landingLeft">
                    <Grid item xs={12} container={true}>
                        <img src={privancyclause} alt="privacy clause"/>
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
                        <Grid item xs={12} className="landingMiddleGrid">
                            <Paper elevation={0} className={classes.paper}>
                                <LandingSelectionTile
                                    headerText={MIDDLE_OPTION_HEADERTEXT}
                                    description={MIDDLE_OPTION_DESCRIPTION}
                                    amount={MIDDLE_OPTION_AMOUNT}
                                    url={MIDDLE_OPTION_URL}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className="landingMiddleGrid">
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

export default LandingPage;