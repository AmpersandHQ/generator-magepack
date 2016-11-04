import { toggle } from './toggle';
import { requesting } from './requesting';
import { recieved } from './recieved';

export function list (state = [], action) {    
    switch (action.type) {
        case 'TOGGLE_ME':
            return Object.assign({}, state, { 
                items: state.items.map(function (item) {
                    return toggle(item, action);
                })
            });
        case 'REQUESTING':
            return Object.assign({}, state, { 
                items: state.items.map(function (item) {
                    return requesting(item, action);
                })
            });
        case 'RECEIVED':
            return Object.assign({}, state, { 
                items: state.items.map(function (item) {
                    return recieved(item, action);
                })
            });
        default:
            return state
    }
}