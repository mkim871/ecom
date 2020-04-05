import {db, auth} from '../../firebase';

export const updateAuth = auth => {
  return {
    type: "AUTH_UPDATED",
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
      console.log(error);
    });
    dispatch(updateAuth('user'));
  };
};
