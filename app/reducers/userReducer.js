import * as types from '../constants/userActionTypes';

const initialState = {
    counter: 0
};

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_COUNTER:
            return {
                ...state,
                counter: action.counterValue
            };
        default:
            return state;
    }
}