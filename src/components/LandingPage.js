import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import privancyclause from "../images/privacyclause.jpg";
import LandingSelectionTile from "./LandingSelectionTile";

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
            <img src={privancyclause} alt="privacy clause" />
          </Grid>
        </Grid>
        {
          <Grid container item xs={6}>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.paper}>
                <LandingSelectionTile
                    headerText="OPTION 1 ($2 DISCOUNT)"
                    description="You CONSENT to receive marketing materials from Instantly Singapore Pte Ltd and
                    Time Out Media Singapore Pte Ltd. The email addresses our system captured during your photo taking process will be
                    shared with these two entities."
                    amount="$8"
                    url="/collectemail"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} className="landingMiddleGrid">
              <Paper elevation={0} className={classes.paper}>
                <LandingSelectionTile
                    headerText="OPTION 2 (REGULAR PRICE)"
                    description="You DO NOT CONSENT to receive marketing materials from Instantly Singapore Pte Ltd and
                    Time Out Media Singapore Pte Ltd. The email addresses our system captured during your photo taking process will
                    be deleted and WILL NOT be shared with these two entities."
                    amount="$10"
                    url="/dontcollectemail"
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