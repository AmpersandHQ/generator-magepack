import React from 'react';
import { startAsync } from '../actions/index';

var ListItemAsync = React.createClass({
    propTypes: {
        item: React.PropTypes.object
    },
    contextTypes: {
        store: React.PropTypes.object
    },
    dispatch: function() {
        this.context.store.dispatch(
            startAsync({
                id: this.props.item.id,
                type: 'ASYNC_ME'
            })
        );
    },
    render: function() {
        return (
            <li>
                <p
                    style={{
                        backgroundColor: this.props.item.selected
                            ? '#E25F35'
                            : 'transparent'
                    }}
                    onClick={this.dispatch}
                >
                    {this.props.item.title}
                    <span>{this.props.item.requesting ? 'LOADING' : ''}</span>
                </p>
            </li>
        );
    }
});

export { ListItemAsync };
