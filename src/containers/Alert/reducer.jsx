import alertConstants from "./constants";
const initState = {
  open: false,
  title: "Alert",
  message: null,
  severity: "error"
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case alertConstants.CLOSE:
      return {
        ...state,
        open: false,
        title: "Alert",
        message: null,
        severity: "error"
      };
    case alertConstants.OPEN:
      return {
        ...state,
        open: true,
        message: action.message,
        title: action.title,
        severity: action.severity
      };
    default:
      return state;
  }
};

export default reducer;
