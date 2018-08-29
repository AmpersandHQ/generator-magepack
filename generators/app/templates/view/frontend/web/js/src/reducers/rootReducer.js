/**
 * rootReducer
 *
 * Imports all reducers into one location and combines them
 * for app-wide use. Useful if we have a parent component that
 * handles multiple child components.
 *
 * @copyright (c) Ampersand Commerce 2018
 */
import { combineReducers } from 'redux';
import { reducers } from './reducers';

const rootReducer = combineReducers({
    reducers,
});

export default rootReducer;
