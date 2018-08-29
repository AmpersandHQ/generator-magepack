export function requesting(state = [], action) {
    if (state.id === action.id) {
        return ({
            ...state,
            requesting: true
        });
    }

    return state;
}
