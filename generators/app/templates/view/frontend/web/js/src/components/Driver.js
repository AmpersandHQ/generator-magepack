import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import { ListItemAsync } from './ListItemAsync';

const Driver = ({ items, actions }) => {
    return (
        <ul>
            {items.map(function(item) {
                if (item.type === 'async') {
                    return <ListItemAsync key={item.id} item={item} startAsync={actions.startAsync} />;
                } else {
                    return <ListItem key={item.id} item={item} selectItem={actions.selectItem} />;
                }
            })}
        </ul>
    );
}

Driver.propTypes = {
    items: PropTypes.array.isRequired
};

export { Driver };
