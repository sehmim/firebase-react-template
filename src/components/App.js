import React, { Component } from 'react';
import Navigation from "./Navigation";

import * as ROUTES from "../Constants/routes";

import LandingPage from "./Landingpage/landing_page";
import SignUpPage from "./SignUp/sign_up_page";
import SignInPage from "./SignIn/sign_in";
import HomePage from "./Home/home";

import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { withFirebase } from './Firebase';
// import FirebaseContext from '../components/Firebase/context';

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
  );  
}
  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation authUser={this.state.authUser} />
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

export default withFirebase(App);