import listsConstants from './constants';

const initState = {
  lists: null
};

const reducer = (state = initState, action:any) => {
  switch (action.type) {
    case listsConstants.UPDATED:
      return {
        ...state,
        lists: action.lists
      };
    default:
      return state;
  }
};

export default reducer;
