export function requesting(state = [], action) {
    switch (action.type) {
        case 'REQUESTING':
            if (state.id === action.id) {
                return Object.assign({}, state, { requesting: true });
            }
        default:
            return state;
    }
}
