/**
 *
 * Reducer
 *
 * Specific reducer/state updating functionality for our app.
 * This is to update the state ONLY; all logic belongs with the Actions.
 *
 * @copyright (c) Ampersand Commerce 2018
 */

import { select } from './select';
import { requesting } from './requesting';
import { recieved } from './recieved';
import initialState from './initialState';
import { Types } from '../utils/variables';

export function reducers(state = initialState, action) {
    const reducer = {
        [Types.SELECT_ITEM]: () => ({
            ...state,
            items: state.items.map(function(item) {
                return select(item, action);
            })
        }),
        [Types.REQUESTING]: () => ({
            ...state,
            items: state.items.map(function(item) {
                return requesting(item, action);
            })
        }),
        [Types.RECEIVED]: () => ({
            ...state,
            items: state.items.map(function(item) {
                return recieved(item, action);
            })
        })
    };

    if (action.type && reducer[action.type]) return reducer[action.type]();

    return state;
}
