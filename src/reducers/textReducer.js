import * as types from '../actions/types';

const initState = [
    {
        id: 32,
        cmt : 'loremlorem'
    },
    {
        id: 12,
        cmt : 'loremlorem'
    }
];
const textReducer = ( state = initState , action ) => {
    switch (action.type) {
        case types.ADD_TEXT :
            return [...state, action.payload];
        case types.REMOTE_TEXT :
            return state.filter( text => action.id !== text.id );
        default :
            return state;
    }
};

export default textReducer;