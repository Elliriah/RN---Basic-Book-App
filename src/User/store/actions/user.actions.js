import axios from 'axios';

export const AUTH_USER = '[USER] AUTH_USER';
export const REGISTER_USER = '[USER] REGISTER_USER';
export const LOGOUT_USER = '[USER] LOGOUT USER';

export const authUser = (payload) => {
  console.log(payload);
  const result = axios.post('https://dark-nightmare-23481.herokuapp.com/auth/local', payload);
  return (dispatch) => {
    result.then((response) => {
      console.log(response.data);
      dispatch({
        type: AUTH_USER,
        payload: true,
        token: response.data.jwt
      });
    }).catch((error) => {
      response.log(error);
      dispatch({
        type: AUTH_USER,
        payload: false,
      });
    });
  };
};

export const logoutUser = () => {

  console.log("LOGOUUUUUUUUUUUUUUUUUUT");
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
      payload: false
    })
  }
}

export const registerUser = () => {
  console.log('REDUCER ON');
  return (dispatch) => {
    const result = axios.post('https://dark-nightmare-23481.herokuapp.com/auth/local', { identifier: 'midosol', password: 'test123' });
    result.then((response) => {
      dispatch({
        type: REGISTER_USER,
        payload: 'yolosa',
      });
    });
  };
};
