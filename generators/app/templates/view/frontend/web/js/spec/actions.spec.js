/*global describe it expect */
import * as actions from '../src/actions';
import { Types } from '../src/utils/variables';
import initialState from '../src/reducers/initialState';

const item = initialState.items[0]; // use a default item

describe('Standard actions', () => {
    const { asyncRequesting, asyncReceived, selectItem } = actions;
    // asyncRequesting
    it('should update the item to use an async request', () => {
        expect(asyncRequesting(item).type).toEqual(Types.REQUESTING);
        expect(asyncRequesting(item).id).toEqual(item.id);
    });

    // asyncReceived
    it('should update the item once the async response is received', () => {
        expect(asyncReceived(item).type).toEqual(Types.RECEIVED);
        expect(asyncReceived(item).id).toEqual(item.id);
    });

    // selectItem
    it('should select an item', () => {
        expect(selectItem(item).type).toEqual(Types.SELECT_ITEM);
        expect(selectItem(item).id).toEqual(item.id);
    });
});
