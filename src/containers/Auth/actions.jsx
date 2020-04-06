import authConstants from './constants';
import alertConstants from '../Alert/constants';
import {history} from '../../_helpers/history';
import userService from '../../_services/user.service';

export const updateAuth = auth => {
  return {
    type: authConstants.UPDATED,
    auth
  };
};

export const emailAuth = (email, password) => {
  return (dispatch, getState) => {
    userService.signin(email, password)
    .then((user) => {
      dispatch(updateAuth(user));
      history.push('/');
      dispatch({
        type: alertConstants.OPEN,
        message: 'Signed in',
        severity: 'info'
      })
    }).catch((error) => {
      dispatch({
        type: alertConstants.OPEN,
        title: 'Error',
        message: error.message
      })
    });
  };
};

export const createAuth = (email, password) => {
  return async (dispatch, getState) => {
    userService.createUser(email, password)
    .then((user) => {
      dispatch(updateAuth(user));
      history.push('/');
      dispatch({
        type: alertConstants.OPEN,
        message: 'Account created',
        severity: 'info'
      })
    }).catch((error) => {
      dispatch({
        type: alertConstants.OPEN,
        title: 'Error',
        message: error.message
      })
    });
  };
};
