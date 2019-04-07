import React, { Component } from 'react';
import * as ROUTES from "../../Constants/routes";

import { withFirebase } from '../Firebase/context';
import { Link, withRouter } from 'react-router-dom';

import { compose } from 'recompose';
import { SignInLink } from '../SignIn/sign_in';
const SignUpPage = () => {
    return (
        <div>
            <div className="container">
                <h1 className="header center ">SIGN UP</h1>
                <SignUpFormComposed/>
                <SignInLink/>
            </div>
        </div>

    )
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
    
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
          .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
    
        event.preventDefault();
      };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
        } = this.state;

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === ''

        return (
            <form>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name">
                </input>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address">
                </input>
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password">
                </input>
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpFormComposed = compose(withRouter, withFirebase)(SignUpFormBase);

const SignUpLink = () => ( <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;
export { SignUpFormComposed, SignUpLink };