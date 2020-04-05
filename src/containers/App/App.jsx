import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth/:type" component={Auth} />
          <Route render={() => <div>Not found</div>}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
