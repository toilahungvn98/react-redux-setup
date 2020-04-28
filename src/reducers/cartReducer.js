// import * as types from '../actions/types';

const initState = {
    productItem : [],
    totals : 0
};

const cartReducer = (state = initState,action) => {
    switch(action.type) {
        case 'TEST' :
            return;
        default :
            return state;
    }
};

export default cartReducer;