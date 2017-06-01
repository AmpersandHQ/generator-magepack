import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
    dispatch() {
        this.context.store.dispatch({
            id: this.props.item.id,
            type: 'SELECT_ITEM'
        });
    }

    render() {
        return (
            <li>
                <p
                    style={{
                        backgroundColor: this.props.item.selected
                            ? '#E25F35'
                            : 'transparent'
                    }}
                    onClick={() => this.dispatch()}
                >
                    {this.props.item.title}
                </p>
            </li>
        );
    }
}

ListItem.propTypes = {
    item: PropTypes.object
};

ListItem.contextTypes = {
    store: PropTypes.object
};

export { ListItem };
