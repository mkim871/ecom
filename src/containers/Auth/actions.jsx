import {db, auth} from '../../firebase';
import authConstants from './constants';
import alertConstants from '../Alert/constants';
import history from '../../_helpers/history';

export const updateAuth = auth => {
  return {
    type: authConstants.UPDATED,
    auth
  };
};

export const emailAuth = (email, password) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const auth = {
        test: "test"
      };
      dispatch(updateAuth(auth));
    }, 2000);
  };
};

export const createAuth = (email, password) => {
  return async (dispatch, getState) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
    }).catch((error) => {
      dispatch({
        type: alertConstants.OPEN,
        message: error.message
      })
    });
    dispatch(updateAuth('user'));
  };
};
