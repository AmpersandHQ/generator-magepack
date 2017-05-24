import React from 'react';

var ListItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object
    },
    contextTypes: {
        store: React.PropTypes.object
    },
    dispatch: function() {
        this.context.store.dispatch({
            id: this.props.item.id,
            type: 'TOGGLE_ME'
        });
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
                </p>
            </li>
        );
    }
});

export { ListItem };
