import React from 'react';
import PropTypes from 'prop-types';

const ListItemAsync = ({ item, startAsync }) => {
    return (
        <li>
            <p
                style={{
                    backgroundColor: item.selected
                        ? '#E25F35'
                        : 'transparent'
                }}
                onClick={() => startAsync(item)}
            >
                {item.title}
                <span>{item.requesting ? 'LOADING' : ''}</span>
            </p>
        </li>
    );
}

ListItemAsync.propTypes = {
    item: PropTypes.object
};

export { ListItemAsync };
