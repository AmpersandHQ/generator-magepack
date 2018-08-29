import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item, selectItem }) => {
    return (
        <li>
            <p
                style={{
                    backgroundColor: item.selected
                        ? 'red'
                        : 'transparent'
                }}
                onClick={() => selectItem(item)}
            >
                {item.title}
            </p>
        </li>
    );
}

ListItem.propTypes = {
    item: PropTypes.object,
    selectItem: PropTypes.func
};

export { ListItem };
