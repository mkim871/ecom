import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import * as ac from "./actions";
import AuthForm from "../../components/authForm/authForm";

export class Auth extends Component {
  facebookAuthHandler = () => {};
  googleAuthHandler = () => {};
  registerHandler = (email, password) => {
    this.props.onRegister(email, password);
  };
  signinHandler = (email, password) => {
    this.props.onSignin(email, password);
  };

  render() {
    return (
      <Container>
        {this.props.auth.auth ? <Redirect to="/" /> : null}
        <AuthForm
          facebookAuth={this.facebookAuthHandler}
          googleAuth={this.googleAuthHandler}
          register={this.registerHandler}
          signin={this.signinHandler}
          type={this.props.match.params.type === "register"}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignin: (email, password) => dispatch(ac.emailAuth(email, password)),
    onRegister: (email, password) => dispatch(ac.createAuth(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
