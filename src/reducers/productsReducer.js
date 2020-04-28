import * as types from '../actions/types';
// import {v4 as uuidv4 } from 'uuid';

const initState = {
  products: [],
  loading: false,
  err: null
};
const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return {
        ...state,
        loading: false,
          products: action.payload
      };
    case types.RECEIVE_LOADING:
      return {
        ...state, loading: true
      };
    case types.RECEIVE_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
          err: 'Not Found 404'
      }
      default:
        return state;
  }
};


export default productsReducer;
