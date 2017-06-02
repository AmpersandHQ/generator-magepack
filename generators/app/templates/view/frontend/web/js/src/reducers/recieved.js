export function recieved(state = [], action) {
    switch (action.type) {
        case 'RECEIVED':
            if (state.id === action.id) {
                return Object.assign({}, state, { requesting: false });
            }
        default:
            return state;
    }
}
