import * as types from './types';

import { DUMB_DATA } from '../api/db';
//get Products


export const receiveProducts = (products) => ({
    type : types.RECEIVE_PRODUCTS,
    payload : products
});

export const getProducts  = () => dispatch =>  {
    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    dispatch({ type : types.RECEIVE_LOADING });

    delay(1500)
    .then(() => {
        dispatch(receiveProducts(DUMB_DATA));
    })
    .catch( () => dispatch({ type: types.RECEIVE_PRODUCTS_FAIL }));
};