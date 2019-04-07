import React, { Component } from 'react';
import M from 'materialize-css';

import { Link } from 'react-router-dom';

import * as ROUTES from '../Constants/routes';

import SignOutButton from "../components/SignOut/sign_out";
import { withFirebase } from './Firebase';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);



const NavigationAuth = () =>{
   return (
    <div >
      <nav className = "blue-grey">
          <div className="nav-wrapper">
          <Link to={ROUTES.HOME} className="brand-logo center">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to={ROUTES.LANDING} ><SignOutButton /></Link></li>
          </ul>
          </div>
      </nav>
    </div>
   ) 
}

const NavigationNonAuth = ()  => {
  return (
    <div >
    <nav className = "blue-grey">
        <div className="nav-wrapper">
        <Link to={ROUTES.LANDING} className="brand-logo center">Logo</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={ROUTES.SIGN_IN} > SignIn </Link></li>
            <li><Link to={ROUTES.SIGN_UP} >SignUp</Link></li>
        </ul>
        </div>
    </nav>
  </div>
  )
}

export default withFirebase(Navigation)