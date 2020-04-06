import React, { Component } from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import * as ac from "./actions";

function LabAlert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class Alert extends Component {
  render() {
    return this.props.alert.open ? (
      <Snackbar
        open={this.props.alert.open}
        autoHideDuration={6000}
        onClose={this.props.onClose}
      >
        <LabAlert
          onClose={this.props.onClose}
          severity={
            this.props.alert.severity ? this.props.alert.severity : "error"
          }
        >
          {this.props.alert.message ? (
            <div>
              <AlertTitle>{this.props.alert.title}</AlertTitle>
              {this.props.alert.message}
            </div>
          ) : (
            this.props.alert.title
          )}
        </LabAlert>
      </Snackbar>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(ac.close())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
