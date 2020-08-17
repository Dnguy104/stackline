import { types } from './types.js';
import { fetchData } from '../../services/api.js';

// action creators
export const creators = {
  fetchDataStart: () => ({
    type: types.FETCH_DATA_START
  }),
  fetchDataError: error => ({
    type: types.FETCH_DATA_ERROR,
    error: error.message
  }),
  recieveData: (data) => ({
    type: types.RECIEVE_DATA,
    data,
  }),
}

export const getApiData = () => async (dispatch) => {
  dispatch(creators.fetchDataStart())
  try {
    const data = await fetchApi()
    dispatch(creators.recieveData(data))
  } catch(err) {
    dispatch(creators.fetchDataError(err))
    throw err
  }
}


const fetchApi = async () => {
  return await fetchData()
    .then(data => data)
    .catch((err) => {
      console.log(err)
    })
};
