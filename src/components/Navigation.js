import React, { Component } from 'react';
import M from 'materialize-css';

import { Link } from 'react-router-dom';

import * as ROUTES from '../Constants/routes';

export default class Navigation extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
    return (
      <div >
        <nav className = "blue-grey">
            <div className="nav-wrapper">
            <Link to={ROUTES.HOME} className="brand-logo center">Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to={ROUTES.SIGN_IN} > SignIn </Link></li>
                <li><Link to={ROUTES.SIGN_UP} >SignUp</Link></li>
            </ul>
            </div>
        </nav>
      </div>
    );
  }
}
