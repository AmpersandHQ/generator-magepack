/*global describe it expect */
import TestRenderer from 'react-test-renderer';
import React from 'react';
import { ListItem } from '../../src/components/ListItem';
import initialState from '../../src/reducers/initialState';

describe('ListItem render', () => {
    const item = initialState.items[0];
    const renderer = TestRenderer.create(<ListItem item={item} />);
    const instance = renderer.root;

    it('has a paragraph to show the item name', () => {
        const paragraph = instance.find(el => {
            if (el.type === 'p') {
                return el;
            }
        });

        // firstly ensure the paragraph exists
        // then we want to check it contains the text we expect it to
        expect(paragraph).not.toBe(null);
        expect(paragraph.children[0]).toEqual(item.title);
    });

    it('has no background colour on initial load', () => {
        const paragraph = instance.find(el => {
            if (el.type === 'p') {
                return el;
            }
        });

        expect(paragraph.props.style.backgroundColor).toEqual('transparent');
    });

    it('has a background color when selected', () => {
        const selectedRender = TestRenderer.create(<ListItem item={{
            ...item,
            selected: true,
        }} />);
        const selectedInstance = selectedRender.root;

        const paragraph = selectedInstance.find(el => {
            if (el.type === 'p') {
                return el;
            }
        });

        expect(paragraph.props.style.backgroundColor).not.toEqual('transparent');
    });
});
