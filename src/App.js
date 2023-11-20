import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PaymentInProcessPage from './components/PaymentInProcessPage';
import PaymentSuccessGIF from './components/PaymentSuccessGIF';
import makepayment2strips from './images/makePayment2strips.png';
import makepayment4strips from './images/makePayment4strips.png';
import makepayment6strips from './images/makePayment6strips.png';
import {
    APP_BOTTOM_OPTION_PAYMENT_AMOUNT,
    APP_BOTTOM_OPTION_PAYMENT_IN_PROCESS_CLAUSE, APP_BOTTOM_OPTION_PAYMENT_SUCCESS_URL, APP_BOTTOM_OPTION_PRINT_COUNT,
    APP_MIDDLE_OPTION_PAYMENT_AMOUNT,
    APP_MIDDLE_OPTION_PAYMENT_IN_PROCESS_CLAUSE,
    APP_MIDDLE_OPTION_PAYMENT_SUCCESS_URL,
    APP_MIDDLE_OPTION_PRINT_COUNT,
    APP_TOP_OPTION_PAYMENT_AMOUNT,
    APP_TOP_OPTION_PAYMENT_IN_PROCESS_CLAUSE,
    APP_TOP_OPTION_PAYMENT_SUCCESS_URL,
    APP_TOP_OPTION_PRINT_COUNT
} from "./config/constants";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route exact path="/gif2prints">
                        <PaymentInProcessPage
                            clause={APP_TOP_OPTION_PAYMENT_IN_PROCESS_CLAUSE}
                            paymentAmount={APP_TOP_OPTION_PAYMENT_AMOUNT}
                            paymentSuccessURL={APP_TOP_OPTION_PAYMENT_SUCCESS_URL}
                            printCount={APP_TOP_OPTION_PRINT_COUNT}
                            imagePath={makepayment2strips}
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif2">
                        <PaymentSuccessGIF successColorBlockClass="paymentSuccessGIF2ColorBlock"/>
                    </Route>
                    <Route exact path="/gif4prints">
                        <PaymentInProcessPage
                            clause={APP_MIDDLE_OPTION_PAYMENT_IN_PROCESS_CLAUSE}
                            paymentAmount={APP_MIDDLE_OPTION_PAYMENT_AMOUNT}
                            paymentSuccessURL={APP_MIDDLE_OPTION_PAYMENT_SUCCESS_URL}
                            printCount={APP_MIDDLE_OPTION_PRINT_COUNT}
                            imagePath={makepayment4strips}
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif4">
                        <PaymentSuccessGIF successColorBlockClass="paymentSuccessGIF4ColorBlock"/>
                    </Route>
                    <Route exact path="/gif6prints">
                        <PaymentInProcessPage
                            clause={APP_BOTTOM_OPTION_PAYMENT_IN_PROCESS_CLAUSE}
                            paymentAmount={APP_BOTTOM_OPTION_PAYMENT_AMOUNT}
                            paymentSuccessURL={APP_BOTTOM_OPTION_PAYMENT_SUCCESS_URL}
                            printCount={APP_MIDDLE_OPTION_PRINT_COUNT}
                            imagePath={makepayment6strips}
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif6">
                        <PaymentSuccessGIF successColorBlockClass="paymentSuccessGIF6ColorBlock"/>
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
