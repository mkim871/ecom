const initState = {
  auth: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "AUTH_UPDATED":
      return {
        ...state,
        auth: action.auth
      };
    default:
      return state;
  }
};

export default reducer;
