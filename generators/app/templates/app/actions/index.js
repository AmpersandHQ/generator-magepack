import qs from 'qs'

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const REQUESTING        = 'REQUESTING';
export const RECEIVED          = 'RECEIVED';

export function startAsync(data) {

    return function (dispatch) {
        dispatch({
            type: REQUESTING,
            id: data.id
        });

        setTimeout(function () {
            dispatch(finishAsync({
                id: data.id
            }))
        }, 2000);
    }
}

export function finishAsync(response) {

    return function (dispatch) {

        dispatch({
            type: 'RECEIVED',
            id: response.id
        });

        dispatch({
            id: response.id,
            type: 'TOGGLE_ME'
        })
    }
}
