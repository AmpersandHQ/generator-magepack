/*global describe it expect */
import { createStore } from 'redux';
import { reducers } from '../src/reducers/reducers';
import initialState from '../src/reducers/initialState';

const store = createStore(reducers, initialState);

describe('the list reducer', () => {
    const { dispatch, getState } = store;
    it('should NOT have a selected item', () => {
        getState().items.map(item => {
            expect(item.selected).not.toBe(true);
        });
    });

    it('should be able to select an item', () => {
        dispatch({
            id: 'item-1',
            type: 'SELECT_ITEM'
        });

        expect(getState().items[0].selected).toBe(true);
    });

    it('should be able to change the selected item', () => {
        dispatch({
            id: 'item-1',
            type: 'SELECT_ITEM'
        });

        expect(getState().items[0].selected).toBe(true);

        dispatch({
            id: 'item-3',
            type: 'SELECT_ITEM'
        });

        expect(getState().items[0].selected).not.toBe(true);
        expect(getState().items[1].selected).toBe(true);
    });

    // test what happens if it passes through an ID that doesn't exist -
    // nothing should be true?
});
