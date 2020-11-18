import axios from 'axios';

export const AUTH_USER = '[USER] AUTH_USER';
export const REGISTER_USER = '[USER] REGISTER_USER';

export const authUser = (payload) => {
  console.log(payload);
  const result = axios.post('https://dark-nightmare-23481.herokuapp.com/auth/local', payload);
  return (dispatch) => {
    result.then((response) => {
      console.log(response.data);
      dispatch({
        type: AUTH_USER,
        payload: true,
      });
    }).catch((error) => {
      dispatch({
        type: AUTH_USER,
        payload: false,
      });
    });
  };
};

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
