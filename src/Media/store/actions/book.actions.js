import axios from 'axios';

export const GET_BOOKS = '[BOOK] GET BOOKS';

export const getBooks = (payload) => {
  console.log("YOLO PAYLOAD", payload);
  let config = {
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA1ODgwNTUxLCJleHAiOjE2MDg0NzI1NTF9.hD2J617JVs3Pdx81u8Vkz1FffMSLp9Mt0ZE81pJgoOI`
    }
  }
  //axios.defaults.headers.common = {'Authorization': `bearer ${payload}`}
  const result = axios.get('https://dark-nightmare-23481.herokuapp.com/books', config);
  
  return (dispatch) => {
    result.then((response) => {
      //console.log(response.data);
      dispatch({
        type: GET_BOOKS,
        payload: response.data,
      });
      
    }).catch((error) => {
      //console.log(error);
      
    });
    
  }
};
