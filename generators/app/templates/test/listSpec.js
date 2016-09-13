/*global describe it expect */
var Redux = require('redux');
var list = require('../dist/app.min').list;

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

var store = Redux.createStore(list, DATA);

describe('HelloWorld App ::', function() {

    describe('the list reducer', function() {
        it('should NOT have a selected item', function() {
            expect(store.getState().items[0].selected).toNotBe(true);
        });

        it('should be able to select an item', function() {
            store.dispatch({
                id: 'item-1',
                type: 'TOGGLE_ME'
            });
            expect(store.getState().items[0].selected).toBe(true);
        });
    });
});