import React, { Component } from 'react';
import Navigation from "./Navigation";

import * as ROUTES from "../Constants/routes";

import LandingPage from "./Landingpage/landing_page";
import SignUpPage from "./SignUp/sign_up_page";
import SignInPage from "./SignIn/sign_in";
import HomePage from "./Home/home";

import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
// import FirebaseContext from '../components/Firebase/context';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation/>
          <hr></hr>
          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;