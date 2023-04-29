import React from "react";
import {Route, Router, Switch} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import GIF2Prints from "./components/GIF2Prints";
import PaymentSuccessGIF2 from "./components/PaymentSucesssGIF2";
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
                        <GIF2Prints/>
                    </Route>
                    <Route exact path="/paymentsuccessgif2">
                        <PaymentSuccessGIF2/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
