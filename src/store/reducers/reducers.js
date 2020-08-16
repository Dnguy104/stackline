import { types } from '../actions/types.js';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  data: {},
  active: null,
};

const app = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_DATA_START:
      return {
        ...state,
        fetching: true
      };
    case types.FETCH_DATA_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    case types.RECIEVE_DATA:
      console.log(action.data)
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data,
        active: 1,
      };
    default:
      return state;
  }
};

export default app;
