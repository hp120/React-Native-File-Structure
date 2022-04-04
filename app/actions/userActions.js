import {
    SET_COUNTER
} from '../constants/userActionTypes';

export function setCounter(counterValue) {
    return {
        type: SET_COUNTER,
        counterValue
    }
}