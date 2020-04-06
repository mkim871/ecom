import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import { history } from "../../_helpers/history";
import { auth } from "../../firebase";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";
import Alert from "../Alert/Alert";
import Lists from "../Lists/Lists";
import * as ac from "../Auth/actions";
import userService from "../../_services/user.service";

class App extends Component {
  componentDidMount() {
    this.listener = auth.onAuthStateChanged(async auth => {
      if (auth) {
        const user = await userService.getUserDetail(auth.uid);
        this.props.onAuth(user);
      } else {
        this.props.onAuth(null);
      }
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <React.Fragment>
        <Alert />
        <Router history={history}>
        <Link to="/auth/signin">Sign in</Link>
        <Link to="/auth/register">Register</Link>
        <Link to="/lists">Lists</Link>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth/:type" component={Auth} />
            <Route path="/lists" component={Lists} />
            <Route render={() => <div>Not found</div>}></Route>
          </Switch>
        </Router>
      </React.Fragment>
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
    onAuth: auth => dispatch(ac.updateAuth(auth))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
