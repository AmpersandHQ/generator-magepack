/**
 * Driver
 *
 * Application wrapper; passes the props and actions down to
 * the relevant components.
 * As the application state management is handled in containers/AppContainer,
 * this can be a 'stateless' component which just handles passing data through
 * and rendering, with little to no extraneous logic.
 *
 * @copyright (c) Ampersand Commerce 2018
 */

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
