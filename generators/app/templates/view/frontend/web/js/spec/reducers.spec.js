/*global describe it expect */

import * as Redux from 'redux/lib/index';
import { reducers } from '../src/reducers/reducers';


const listData = {
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

const store = Redux.createStore(reducers, listData);


describe('the list reducer', () => {

    it('should NOT have a selected item', () => {

        expect(store.getState().items[0].selected).not.toBe(true);
    });

    it('should be able to select an item', () => {

        store.dispatch({
            id: 'item-1',
            type: 'SELECT_ITEM'
        });

        expect(store.getState().items[0].selected).toBe(true);
    });
});
