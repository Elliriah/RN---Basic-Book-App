import * as Actions from '../actions';

const initialState = {
  books: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_BOOKS:
    {
      return {
        ...state,
        books: action.payload,
      };
    }
    default:
    {
      return state;
    }
  }
};

export default bookReducer;
