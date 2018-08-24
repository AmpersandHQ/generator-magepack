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
