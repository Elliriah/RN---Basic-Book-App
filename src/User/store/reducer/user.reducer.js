import * as Actions from '../actions';

const initialState = {
  entities: null,
  logged: false,
  token: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.AUTH_USER:
    {
      console.log('PASS REDUCER auth');
      return {
        ...state,
        logged: action.payload,
        token: action.token
      };
    }
    case Actions.REGISTER_USER:
    {
      console.log('PASS REDUCER REGISTER');
      return {
        ...state,
        entities: action.payload,
      };
    }
    case Actions.LOGOUT_USER:
    { 
      return {
        ...state,
        logged: action.payload
      };
    }
    default:
    {
      return state;
    }
  }
};

export default userReducer;
