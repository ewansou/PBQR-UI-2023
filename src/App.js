import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PaymentInProcessPage from './components/PaymentInProcessPage';
import PaymentSuccessGIF from './components/PaymentSuccessGIF';
import makepayment2strips from './images/makePayment2strips.png';
import makepayment4strips from './images/makePayment4strips.png';
import makepayment6strips from './images/makePayment6strips.png';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/gif2prints">
            <PaymentInProcessPage
              paymentAmount="1000"
              paymentSuccess="2"
              printCount="2"
              imagePath={makepayment2strips}
            />
          </Route>
          <Route exact path="/paymentsuccessgif2">
            <PaymentSuccessGIF successColorBlockClass="paymentSuccessGIF2ColorBlock" />
          </Route>
          <Route exact path="/gif4prints">
            <PaymentInProcessPage
              paymentAmount="1200"
              paymentSuccess="4"
              printCount="4"
              imagePath={makepayment4strips}
            />
          </Route>
          <Route exact path="/paymentsuccessgif4">
            <PaymentSuccessGIF successColorBlockClass="paymentSuccessGIF4ColorBlock" />
          </Route>
          <Route exact path="/gif6prints">
            <PaymentInProcessPage
              paymentAmount="1400"
              paymentSuccess="6"
              printCount="6"
              imagePath={makepayment6strips}
            />
          </Route>
          <Route exact path="/paymentsuccessgif6">
            <PaymentSuccessGIF successColorBlockClass="paymentSuccessGIF6ColorBlock" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
