/**
 * Reducer function to manage the tally counter state.
 * 
 * @module reducer
 */

import { ADD, SUBTRACT, RESET } from './constants.js';
import { getValidNumber } from './utils.js';

/**
 * Reducer function that updates the state based on actions.
 * 
 * @param {Object} state - The current state.
 * @param {Object} action - The dispatched action.
 * @returns {Object} The new state after applying the action.
 */
export function tallyReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case ADD:
            return { ...state, count: state.count + getValidNumber(action.payload) };
        case SUBTRACT:
            return { ...state, count: state.count - getValidNumber(action.payload) };
        case RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
}
