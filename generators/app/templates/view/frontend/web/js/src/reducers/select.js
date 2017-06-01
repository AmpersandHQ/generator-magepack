export function select(state = [], action) {
    switch (action.type) {
        case 'SELECT_ITEM':
            if (state.id === action.id) {
                return Object.assign({}, state, { selected: true });
            } else {
                return Object.assign({}, state, { selected: false });
            }
        default:
            return state;
    }
}
