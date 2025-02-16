/**
 * Entry point for the Redux-inspired Tally App.
 * Initializes the store, subscribes to state changes, and runs test scenarios.
 * 
 * @module index
 */

import { createStore } from './store.js';
import { tallyReducer } from './reducer.js';
import { actionCreators } from './actionCreators.js';

/** @constant {Object} initialState - The initial state of the tally store. */
const initialState = { count: 0 };

/** @constant {Object} store - The global store instance. */
const store = createStore(tallyReducer, initialState);

// Subscribe to store changes and log them
store.subscribe(() => console.log('State:', store.getState()));

// Test scenarios
console.log('SCENARIO 1: Initial State Verification');
console.log(store.getState());

console.log('SCENARIO 2: Incrementing the Counter');
store.dispatch(actionCreators.add(2));

console.log('SCENARIO 3: Decrementing the Counter');
store.dispatch(actionCreators.subtract(1));

console.log('SCENARIO 4: Resetting the Counter');
store.dispatch(actionCreators.reset());
