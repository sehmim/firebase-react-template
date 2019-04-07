import React, { Component } from 'react';
import { SignUpLink } from '../SignUp/sign_up_page';

import * as ROUTES from "../../Constants/routes";

import { compose } from 'recompose';
import { withFirebase } from '../Firebase/context';
import { withRouter, Link } from 'react-router-dom';

const SingIn = () => {
    return(
        <div className="container">
            <h1>SingIn</h1>
            <SingInFormComposed/>
            <SignUpLink/>
        </div>
    )
}

const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    error: null
  };

class SingInFormBase extends Component{
    constructor(props){
        super(props)
        this.state = {
            ...INITIAL_STATE
        }
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({ ...INITIAL_STATE })
            this.props.history.push(ROUTES.HOME)
        })
        .catch(error => { 
            this.setState({ error })
        })
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        };

    render(){
        const { email, password, error } = this.state
        const isNotValid =  email === '' || password === ''

        return(
            <form onSubmit={this.onSubmit} >
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange} 
                    type="text" 
                    placeholder="Email Address"
                />
                <input
                    name="password" 
                    value={password} 
                    onChange={this.onChange} 
                    type="password" 
                    placeholder="Password"
                />

                <button disabled={isNotValid} type="submit" >
                    Login
                </button>
                { error && <p>{ error.message }</p> }
            </form>
        )
    }
}

const SingInFormComposed = compose(
    withRouter,
    withFirebase
)(SingInFormBase)

const SignInLink = () => ( <p>
    Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
);
export default SingIn
export { SingInFormComposed, SignInLink }