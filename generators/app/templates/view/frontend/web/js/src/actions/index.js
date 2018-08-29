/**
 * Actions
 *
 * Where the magic happens. This contains the core of the
 * application functionality, and passes it through to
 * the reducer to update the app state. Ideally we want all
 * 'business' logic to be here; calculations, async calls, etc.
 *
 * @copyright (c) Ampersand Commerce 2018
 */

import { Types } from '../utils/variables';

// basic actions
export function asyncRequesting(payload) {
    return {
        type: Types.REQUESTING,
        id: payload.id,
    }
}

export function asyncReceived(payload) {
    return {
        type: Types.RECEIVED,
        id: payload.id,
    }
}

export function selectItem(payload) {
    return {
        type: Types.SELECT_ITEM,
        id: payload.id,
    }
}

// thunks
// generally used to trigger other functions after
// logic, or when doing async calls.
// a good explanation is in the link below!
// https://daveceddia.com/what-is-a-thunk/
export function startAsync(data) {
    return function(dispatch) {
        dispatch(asyncRequesting(data));

        setTimeout(function() {
            dispatch(finishAsync(data));
        }, 2000);
    };
}

export function finishAsync(data) {
    return function(dispatch) {
        dispatch(asyncReceived(data));

        dispatch(selectItem(data));
    };
}
