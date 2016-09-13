import { toggle } from './toggle';

export function list (state = [], action) {    
    switch (action.type) {
        case 'TOGGLE_ME':
            return Object.assign({}, state, { 
                items: state.items.map(function (item) {
                    return toggle(item, action);
                })
            });
        default:
            return state;
    }
}