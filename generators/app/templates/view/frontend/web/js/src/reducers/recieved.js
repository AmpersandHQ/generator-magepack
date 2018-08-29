export function recieved(state = [], action) {
    if (state.id === action.id) {
        return ({
            ...state,
            requesting: false
        });
    }

    return state;
}
