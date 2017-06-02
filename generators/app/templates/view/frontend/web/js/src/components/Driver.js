import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import { ListItemAsync } from './ListItemAsync';

class Driver extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(function(item) {
                    if (item.type === 'async') {
                        return <ListItemAsync key={item.id} item={item} />;
                    } else {
                        return <ListItem key={item.id} item={item} />;
                    }
                })}
            </ul>
        );
    }
}

Driver.propTypes = {
    items: PropTypes.array.isRequired
};

export { Driver };
