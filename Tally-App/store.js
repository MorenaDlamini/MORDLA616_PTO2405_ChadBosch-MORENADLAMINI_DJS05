/**
 * implementation for state management.
 * 
 * @module store
 */

/**
 * Redux-inspired store.
 * 
 * @param {Function} reducer - Function that determines state changes based on actions.
 * @param {Object} initialState - The initial state of the store.
 * @returns {Object} The store with `getState`, `dispatch`, and `subscribe` methods.
 */
export function createStore(reducer, initialState) {
    let state = reducer(initialState, { type: '@@INIT' });
    let listeners = [];

    /**
     * Retrieves the current state.
     * @returns {Object} The current state.
     */
    const getState = () => state;

    /**
     * Dispatches an action to update the state.
     * @param {Object} action - The action object with a `type` and optional `payload`.
     */
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    /**
     * Subscribes a function to state changes.
     * @param {Function} listener - Function to be called on state updates.
     * @returns {Function} A function to unsubscribe the listener.
     */
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    return { getState, dispatch, subscribe };
}
