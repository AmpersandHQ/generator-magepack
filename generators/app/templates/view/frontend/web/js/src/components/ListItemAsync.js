import React from 'react';
import PropTypes from 'prop-types';
import { startAsync } from '../actions/index';

class ListItemAsync extends React.Component {
    dispatch() {
        this.context.store.dispatch(
            startAsync({
                id: this.props.item.id,
                type: 'ASYNC_ME'
            })
        );
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
                    <span>{this.props.item.requesting ? 'LOADING' : ''}</span>
                </p>
            </li>
        );
    }
}

ListItemAsync.propTypes = {
    item: PropTypes.object
};

ListItemAsync.contextTypes = {
    store: PropTypes.object
};

export { ListItemAsync };
