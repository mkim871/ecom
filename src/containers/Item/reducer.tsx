import itemConstants from './constants';

const initState = {
  currentItem: null
};

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case itemConstants.CURRENT:
      return {
        ...state,
        currentItem: action.item
      };
    default:
      return state;
  }
};

export default reducer;
