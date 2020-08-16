import { types } from '../actions/types.js';

const initialState = {
    productData: [],
    loading: false
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case types.RECIEVE_DATA:
            return {
                ...state,
                productData: action.payload,
                loading: true
            };
        default:
            return state;
    }
};
