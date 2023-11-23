import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import PayToUseLandingPage from './components/PayToUseLandingPage';
import PaymentInProgressPage from './components/PaymentInProgressPage';
import PaymentSuccessPage from './components/PaymentSuccessPage';
import makepayment2strips from './images/makePayment2strips.png';
import makepayment4strips from './images/makePayment4strips.png';
import makepayment6strips from './images/makePayment6strips.png';
import makepayment14R from './images/makePayment14R.png';
import makepayment24R from './images/makePayment24R.png';
import makepayment34R from './images/makePayment34R.png';
import {
    APP_BOTTOM_OPTION_4R_PRINT_COUNT,
    APP_BOTTOM_OPTION_PAYMENT_AMOUNT,
    APP_BOTTOM_OPTION_PAYMENT_IN_PROCESS_CLAUSE,
    APP_BOTTOM_OPTION_PAYMENT_SUCCESS_URL, APP_BOTTOM_OPTION_PRINT_COUNT, APP_MIDDLE_OPTION_4R_PRINT_COUNT,
    APP_MIDDLE_OPTION_PAYMENT_AMOUNT,
    APP_MIDDLE_OPTION_PAYMENT_IN_PROCESS_CLAUSE,
    APP_MIDDLE_OPTION_PAYMENT_SUCCESS_URL,
    APP_MIDDLE_OPTION_PRINT_COUNT, APP_TOP_OPTION_4R_PRINT_COUNT, APP_TOP_OPTION_BOOKMARK_PRINT_COUNT,
    APP_TOP_OPTION_PAYMENT_AMOUNT,
    APP_TOP_OPTION_PAYMENT_IN_PROCESS_CLAUSE,
    APP_TOP_OPTION_PAYMENT_SUCCESS_URL,
    APP_TOP_OPTION_PRINT_COUNT,
    BOTTOM_OPTION_SUCCESS_COLOR,
    ENABLE_PROMO, IS_4R,
    MIDDLE_OPTION_SUCCESS_COLOR,
    PROMO_SUCCESS_COLOR,
    TOP_OPTION_SUCCESS_COLOR
} from "./config/constants";
import PromoWithPayPerUseLandingPage from "./components/PromoWithPayPerUseLandingPage";
import PromoLandingPage from "./components/PromoLandingPage";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        {ENABLE_PROMO ? (
                            <PromoWithPayPerUseLandingPage/>
                        ) : (
                            <PayToUseLandingPage/>
                        )}
                    </Route>
                    <Route exact path="/paytouselandingpage">
                        <PayToUseLandingPage/>
                    </Route>
                    <Route exact path="/promoredemptionpage">
                        <PromoLandingPage />
                    </Route>
                    <Route exact path="/gif2prints">
                        <PaymentInProgressPage
                            clause={APP_TOP_OPTION_PAYMENT_IN_PROCESS_CLAUSE}
                            paymentAmount={APP_TOP_OPTION_PAYMENT_AMOUNT}
                            paymentSuccessURL={APP_TOP_OPTION_PAYMENT_SUCCESS_URL}
                            printCount={IS_4R ? APP_TOP_OPTION_4R_PRINT_COUNT : APP_TOP_OPTION_BOOKMARK_PRINT_COUNT}
                            imagePath={IS_4R ? makepayment14R : makepayment2strips}
                        />
                    </Route>
                    <Route exact path="/gif4prints">
                        <PaymentInProgressPage
                            clause={APP_MIDDLE_OPTION_PAYMENT_IN_PROCESS_CLAUSE}
                            paymentAmount={APP_MIDDLE_OPTION_PAYMENT_AMOUNT}
                            paymentSuccessURL={APP_MIDDLE_OPTION_PAYMENT_SUCCESS_URL}
                            printCount={IS_4R ? APP_MIDDLE_OPTION_4R_PRINT_COUNT : APP_MIDDLE_OPTION_PRINT_COUNT}
                            imagePath={IS_4R ? makepayment24R : makepayment4strips}
                        />
                    </Route>
                    <Route exact path="/gif6prints">
                        <PaymentInProgressPage
                            clause={APP_BOTTOM_OPTION_PAYMENT_IN_PROCESS_CLAUSE}
                            paymentAmount={APP_BOTTOM_OPTION_PAYMENT_AMOUNT}
                            paymentSuccessURL={APP_BOTTOM_OPTION_PAYMENT_SUCCESS_URL}
                            printCount={IS_4R ? APP_BOTTOM_OPTION_4R_PRINT_COUNT : APP_BOTTOM_OPTION_PRINT_COUNT}
                            imagePath={IS_4R ? makepayment34R : makepayment6strips}
                        />
                    </Route>
                    <Route exact path="/promosuccess">
                        <PaymentSuccessPage
                            headerText="REDEMPTION SUCCESS"
                            successColor={PROMO_SUCCESS_COLOR}
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif2">
                        <PaymentSuccessPage
                            headerText="PAYMENT SUCCESS"
                            successColor={TOP_OPTION_SUCCESS_COLOR}
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif4">
                        <PaymentSuccessPage
                            headerText="PAYMENT SUCCESS"
                            successColor={MIDDLE_OPTION_SUCCESS_COLOR}
                        />
                    </Route>
                    <Route exact path="/paymentsuccessgif6">
                        <PaymentSuccessPage
                            headerText="PAYMENT SUCCESS"
                            successColor={BOTTOM_OPTION_SUCCESS_COLOR}
                        />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
