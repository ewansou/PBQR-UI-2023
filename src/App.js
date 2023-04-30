import React from "react";
import {Route, Router, Switch} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import PaymentInProcessPage from "./components/PaymentInProcessPage";
import PaymentSuccessGIF from "./components/PaymentSuccessGIF";
import {history} from "./helper/history";

function App() {
    return (
        <Router history={history}>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route exact path="/gif2prints">
                        <PaymentInProcessPage
                            paymentAmount="1000"
                            paymentSuccess="2"
                            printCount="2"
                            imagePath="/images/makePayment2strips.png"
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif2">
                        <PaymentSuccessGIF
                            successColorBlockClass="paymentSuccessGIF2ColorBlock"
                        />
                    </Route>
                    <Route exact path="/gif4prints">
                        <PaymentInProcessPage
                            paymentAmount="1200"
                            paymentSuccess="4"
                            printCount="4"
                            imagePath="/images/makePayment4strips.png"
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif4">
                        <PaymentSuccessGIF
                            successColorBlockClass="paymentSuccessGIF4ColorBlock"
                        />
                    </Route>
                    <Route exact path="/gif6prints">
                        <PaymentInProcessPage
                            paymentAmount="1400"
                            paymentSuccess="6"
                            printCount="6"
                            imagePath="/images/makePayment6strips.png"
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif6">
                        <PaymentSuccessGIF
                            successColorBlockClass="paymentSuccessGIF6ColorBlock"
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
