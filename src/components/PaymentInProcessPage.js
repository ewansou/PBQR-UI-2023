import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import ClipLoader from "react-spinners/ClipLoader";
import Grid from "@material-ui/core/Grid";
import {css} from "@emotion/react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {API_BASE} from "../config/constants";

const PaymentInProcessPage = ({clause, paymentAmount, paymentSuccessURL, printCount, imagePath}) => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            flex: 1,
            textAlign: "center",
        },
    }));
    const classes = useStyles(); //Required for making styles
    const history = useHistory(); //Required for redirection

    const dollarAmount = "$" + paymentAmount / 100;

    //States
    const [data, updateData] = useState("Pending...");
    const [postRequestStateObject, updatePostRequestStateObject] = useState({});

    let sseSource = {};

    //On first mount, call API to retrieve QR code
    useEffect(() => {
        let apiURL = API_BASE + `/payment/amount=` + paymentAmount;
        const fetchData = async () => {
            try {
                const response = await axios
                    .post(apiURL, {});
                if (response.data.status === "failed") {
                    console.log("POST requested failed at initial mount:", response.data.error);
                    console.log("Error response is:", response.data);
                    console.log("Retrying...");
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                } else {
                    updatePostRequestStateObject(response.data);
                }
            } catch (error) {
                console.error("Error in try catch POST request. Error is: ", error);
                console.log("Retrying...");
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            }
        };
        fetchData();
    }, []);

    /*
    postRequestStateObject is an empty object on mount. We check if its length is not zero before we initiate sse.
    If there is an issue with POST request to Omise, Omise will return with response with an id, status failed and
    with an empty source {}.
    Do note that response from Omise can have status to be "pending", "successful" or "failed".
     */
    useEffect(() => {
        if ((Object.keys(postRequestStateObject).length !== 0) && (postRequestStateObject.status !== "failed")) {
            console.log(
                "SSE end point is: " + postRequestStateObject.sseEndpoint
            );
            sseSource = new EventSource(postRequestStateObject.sseEndpoint); //GET request to backend to initiate sse
            sseSource.onmessage = function logEvents(event) {
                console.log("Receive message from server");
                if (event.data === "heartbeat") {
                    console.log("Heartbeating...")
                } else if (event.data === "Payment received") {
                    updateData(event.data);
                    sseSource.close();
                    console.log("Closing SSE...");
                    history.push(paymentSuccessURL);
                } else if (event.data === "Payment failed. Retrying...") {
                    updateData(event.data);
                    sseSource.close();
                    console.log("Closing SSE...");
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                }
            };
        } else if ((Object.keys(postRequestStateObject).length !== 0) && (postRequestStateObject.status === "failed")) {
            console.log("POST request to Omise failed. Omise return failed status");
            setTimeout(() => {
                window.location.reload();
            }, 5000); //If Omise returns failed status, retry after 5 seconds
        }
    }, [postRequestStateObject]);

    //On closing SSE (due to time out) or back button, we send GET request to server to close and remove SSE
    function closeSse(chargeID) {

        axios.get(API_BASE + `/terminateSse?id=${chargeID}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function terminateSseAndGoBackMenu() {
        sseSource.close();
        closeSse(postRequestStateObject.chargeID);
        history.push("/");
    }

    const renderTime = ({remainingTime}) => {
        if (remainingTime === 0) {
            return <div className="timer">Redirecting back...</div>;
        }

        return (
            <div className="timer">
                <div className="value">{remainingTime} seconds</div>
            </div>
        );
    };

    const override = css`
      margin: 0 auto;
      border-color: #f26522;
      margin-top: 30vh;
      width: 200px;
      height: 200px;
      position: relative;
      left: 330px;
    `;

    const style = {
        height: "80vh",
        margin: "40px",
    };

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid container item xs={6} className="makePaymentLeft">
                    <Grid item xs={12} container={true}>
                        <div className="makePaymentLeftDiv">
                            <h1 className="makePaymentLeftTitle">{printCount} Bookmark Printouts</h1>
                            <span>with softcopies emailing</span>
                            <img
                                src={imagePath}
                                className="makePaymentLeft2BookmarkPrintoutsImage"
                            />
                            <p className="paymentAgree">{clause}</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid container item xs={6}>
                    <Grid item xs={12} container={true} style={style}>
                        {postRequestStateObject.chargeID ? (
                                <div className="makePaymentMainDiv">
                                    <p className="makePaymentInstruction">
                                        Open your banking app.
                                    </p>
                                    <p className="makePaymentInstruction">
                                        Scan the QR code below to make
                                    </p>
                                    <p className="makePaymentInstruction">payment via PayNow</p>
                                    <p className="makePaymentRef">
                                        Ref: {postRequestStateObject.chargeID}
                                    </p>
                                    <h3 className="makePaymentStatus">Status: {data}</h3>
                                    <div className="makePaymentQRDiv">
                                        <p className="makePaymentInText">
                                            Kindly make payment in
                                            <CountdownCircleTimer
                                                onComplete={() => {
                                                    terminateSseAndGoBackMenu();
                                                    return [true, 1500]; // repeat animation in 1.5 seconds
                                                }}
                                                isPlaying
                                                duration={180}
                                                size={0}
                                                colors="#F26522"
                                            >
                                                {renderTime}
                                            </CountdownCircleTimer>
                                        </p>

                                        <img
                                            src={postRequestStateObject.imageURL}
                                            className="makePaymentQRCode"
                                        />
                                    </div>
                                    <p className="makePaymentAmount">Amount: {dollarAmount}</p>
                                    <p className="makePaymentBackWarning">
                                        * DO NOT touch the Back button after you've scanned and made payment
                                    </p>
                                    <button
                                        onClick={terminateSseAndGoBackMenu}
                                        className="makePaymentBackButton"
                                    >
                                        BACK
                                    </button>
                                </div>
                            ) :
                            <div>
                                <ClipLoader css={override}/>
                                <p className="makePaymentGeneratingQR">
                                    Please hold on. Generating payment QR ...
                                </p>
                            </div>}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default PaymentInProcessPage;