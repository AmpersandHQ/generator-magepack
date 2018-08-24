export function select(state = [], action) {
    if (state.id === action.id) {
        return ({
            ...state,
            selected: true
        });
    } else {
        return ({
            ...state,
            selected: false
        });
    }
}
