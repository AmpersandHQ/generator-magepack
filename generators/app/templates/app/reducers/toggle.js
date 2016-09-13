export function toggle (state = [], action)  {    
    switch (action.type) {
        case 'TOGGLE_ME':
            if (state.id === action.id) {
                return Object.assign({}, state, {selected: true});
            }
            else {
                return Object.assign({}, state, {selected: false});
            }
        default:
            return state;
    }
}