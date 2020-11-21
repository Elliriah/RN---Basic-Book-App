import axios from 'axios';

export const AUTH_USER = '[USER] AUTH_USER';
export const REGISTER_USER = '[USER] REGISTER_USER';
export const LOGOUT_USER = '[USER] LOGOUT USER';
export const UPDATE_USER = '[USER] UPDATE USER';
export const UPDATE_USER_ERROR = '[USER] UPDATE USER ERROR';

export const authUser = (payload) => {
  const result = axios.post('https://dark-nightmare-23481.herokuapp.com/auth/local', payload);
  return (dispatch) => {
    result.then((response) => {
      dispatch({
        type: AUTH_USER,
        payload: true,
        token: response.data.jwt,
        userInfo: response.data,
      });
    }).catch(() => {
      dispatch({
        type: AUTH_USER,
        payload: false,
      });
    });
  };
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
    payload: false,
  });
};

export const getUserInfo = (payload) => {

  const config = {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  };
  const result = axios.get('https://dark-nightmare-23481.herokuapp.com/users/me', config);
  return (dispatch) => {
    result.then((response) => {
      console.log("GET RESPONSE====", response);
      dispatch({
        type: UPDATE_USER,
        userInfo: response.data,
      });
    }).catch((error) => {
      console.log(error);
      dispatch({
        type: UPDATE_USER_ERROR,
      });
    });
  };
};

export const registerUser = (payload) => {
  console.log("register");
  console.log(payload);
  const result = axios.post('https://dark-nightmare-23481.herokuapp.com/auth/local/register', payload);
  return (dispatch) => {
    result.then((response) => {
      console.log(response);
      dispatch({
        type: AUTH_USER,
        payload: true,
        token: response.data.jwt,
        userInfo: response.data,
      });
    }).catch((error) => {
      console.log(error);
      console.log("?????????????")
      dispatch({
        type: AUTH_USER,
        payload: false,
      });
    });
  };
};
