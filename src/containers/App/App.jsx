import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { auth } from "../../firebase";
import { history } from "../../_helpers/history";
import userService from "../../_services/user.service";
import theme from "../../_styles/theme";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";
import Alert from "../Alert/Alert";
import Lists from "../Lists/Lists";
import Item from "../Item/Item";
import NavBar from "../NavBar/NavBar";
import Wishlist from "../Wishlist/Wishlist";
import * as ac from "../Auth/actions";

import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {pink, red} from '@material-ui/core/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: red,
  },
});

class App extends Component {
  componentDidMount() {
    this.listener = auth.onAuthStateChanged(async (auth) => {
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
        <ThemeProvider {...this.props} theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
          <Alert />
          <Router history={history}>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth/register" exact component={Auth} />
              <Route path="/auth/signin" exact component={Auth} />
              <Route path="/lists" exact component={Lists} />
              <Route path="/wishlist" exact component={Wishlist} />
              <Route path="/lists/:id" component={Item} />
              <Route render={() => <div>Not found</div>}></Route>
            </Switch>
          </Router>
          </MuiThemeProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (auth) => dispatch(ac.updateAuth(auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
