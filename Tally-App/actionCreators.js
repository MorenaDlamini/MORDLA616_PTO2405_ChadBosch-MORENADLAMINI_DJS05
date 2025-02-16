/**
 * Action creators for dispatching actions to the tally store.
 * 
 * @module actionCreators
 */

import { ADD, SUBTRACT, RESET } from './constants.js';

/**
 * Action creators for managing tally state.
 */
export const actionCreators = {
    /**
     * Creates an action to increment the count.
     * @param {number} [value=1] - The value to increment by.
     * @returns {Object} The action object.
     */
    add: (value = 1) => ({ type: ADD, payload: value }),

    /**
     * Creates an action to decrement the count.
     * @param {number} [value=1] - The value to decrement by.
     * @returns {Object} The action object.
     */
    subtract: (value = 1) => ({ type: SUBTRACT, payload: value }),

    /**
     * Creates an action to reset the count.
     * @returns {Object} The action object.
     */
    reset: () => ({ type: RESET }),
};
