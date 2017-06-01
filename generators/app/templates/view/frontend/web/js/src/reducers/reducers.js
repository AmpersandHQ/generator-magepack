import { select } from './select';
import { requesting } from './requesting';
import { recieved } from './recieved';

export function reducers(state = [], action) {
    switch (action.type) {
        case 'SELECT_ITEM':
            return Object.assign({}, state, {
                items: state.items.map(function(item) {
                    return select(item, action);
                })
            });
        case 'REQUESTING':
            return Object.assign({}, state, {
                items: state.items.map(function(item) {
                    return requesting(item, action);
                })
            });
        case 'RECEIVED':
            return Object.assign({}, state, {
                items: state.items.map(function(item) {
                    return recieved(item, action);
                })
            });
        default:
            return state;
    }
}
