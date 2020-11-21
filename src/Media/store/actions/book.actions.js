import axios from 'axios';

export const GET_BOOKS = '[BOOK] GET BOOKS';

export const getBooks = (payload) => {
  const config = {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  };
  const result = axios.get('https://dark-nightmare-23481.herokuapp.com/books', config);

  return (dispatch) => {
    result.then((response) => {
      dispatch({
        type: GET_BOOKS,
        payload: response.data,
      });
    }).catch(() => {
      dispatch({
        type: GET_BOOKS,
        payload: null,
      });
    });
  };
};
