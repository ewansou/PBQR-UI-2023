import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PaymentInProcessPage from './components/PaymentInProcessPage';
import PaymentSuccessGIF from './components/PaymentSuccessGIF';
import makepayment2strips from './images/makePayment2strips.png';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/collectemail">
            <PaymentInProcessPage
              clause="By making payment, you agree to the terms and conditions of using this photo booth service
                (displayed in the preivous screen). Also, you CONSENT to receive marketing materials (via email) from
                 Instantly Singapore Pte Ltd and Time Out Media Singapore Pte Ltd."
              paymentAmount="800"
              paymentSuccessURL="/collectemailsuccess"
              printCount="2"
              imagePath={makepayment2strips}
            />
          </Route>
          <Route exact path="/collectemailsuccess">
            <PaymentSuccessGIF successColorBlockClass="paymentSuccessCollectEmailColorBlock" />
          </Route>
          <Route exact path="/dontcollectemail">
            <PaymentInProcessPage
                clause="By making payment, you agree to the terms and conditions of using this photo booth service
                (displayed in the preivous screen). Also, you DO NOT CONSENT to receive marketing materials (via email)
                from Instantly Singapore Pte Ltd and Time Out Media Singapore Pte Ltd."
              paymentAmount="1000"
              paymentSuccessURL="/dontcollectemailsuccess"
              printCount="2"
              imagePath={makepayment2strips}
            />
          </Route>
          <Route exact path="/dontcollectemailsuccess">
            <PaymentSuccessGIF successColorBlockClass="paymentSuccessDontCollectEmailColorBlock" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
