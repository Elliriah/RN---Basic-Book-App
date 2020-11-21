import axios from 'axios';

export const GET_BOOKS = '[BOOK] GET BOOKS';
export const GET_FAVORIS = '[FAVORIS] GET FAVORIS';
export const ADD_FAVORIS = '[FAVORIS] ADD FAVORIS';

export const addFavoris = (payload, idUser, idBook) =>
{
  const result = axios({
    method: 'POST',
    url: 'https://dark-nightmare-23481.herokuapp.com/favorites',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload}`
    },
    data: {
      user: idUser,
      book: idBook,
      type: "book"
    }
  });
  return (dispatch) => {
    result.then((response) => {
      console.log("FAVORIS RESPONSE:::", response)
      dispatch(getFavoris(payload, idUser));
      dispatch({
        type: ADD_FAVORIS,
        payload: response.data,
      });
    }).catch((error, reason) => {
      console.log(error);
      dispatch({
        type: ADD_FAVORIS,
        payload: null,
      });
    });
  };
}

export const getFavoris = (payload, idUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  };
  console.log("GET FAVORIS");
  const result = axios.get('https://dark-nightmare-23481.herokuapp.com/users/me/books/' + idUser, config);
  return (dispatch) => {
    result.then((response) => {
      dispatch({
        type: GET_FAVORIS,
        payload: response.data,
      });
    }).catch(() => {
      dispatch({
        type: GET_FAVORIS,
        payload: null,
      });
    });
  };
}

export const getBooks = (payload) => {
  const config = {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  };
  console.log("COnfig Books", config);
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
