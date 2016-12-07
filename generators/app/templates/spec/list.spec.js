/*global describe it expect */

import * as Redux from "redux/lib/index";
import { reducers } from '../app/reducers/reducers';


var DATA = {
    items: [{
        id: 'item-1',
        title: 'Item 1',
        selected: false
    },
    {
        id: 'item-2',
        title: 'Item 2',
        selected: false
    },
    {
        id: 'item-3',
        title: 'Item 3',
        selected: false
    }]
};

var store = Redux.createStore(reducers, DATA);


describe('the list reducer', function() {
    it('should NOT have a selected item', function() {
        expect(store.getState().items[0].selected).not.toBe(true);
    });

    it('should be able to select an item', function() {
        store.dispatch({
            id: 'item-1',
            type: 'TOGGLE_ME'
        });
        expect(store.getState().items[0].selected).toBe(true);
    });
});
