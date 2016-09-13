import React from 'react';

var ListItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object
    },
    contextTypes: {
        store: React.PropTypes.object
    },
    dispatch: function () {
        this.context.store.dispatch({
            id: this.props.item.id,
            type: 'TOGGLE_ME'
        });
    },
    render: function () {
        return (
            <ul style={{ backgroundColor:  this.props.item.selected ? 'gold': 'transparent'}}>
                <li>
                    <p onClick={this.dispatch}>{ this.props.item.title }</p>
                </li>
            </ul>
        );
    }
});

export { ListItem }