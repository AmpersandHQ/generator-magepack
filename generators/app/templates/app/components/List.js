import React from 'react';
import { ListItem } from './ListItem'

var List = React.createClass({
    propTypes: {
        reduxStore: React.PropTypes.object,
        items: React.PropTypes.array
    },
    render: function() {
        var reduxStore = this.props.reduxStore;
        return (
            <ul>
                {this.props.items.map(function (item) {
                    return (
                        <ListItem key={item.id} item={item} reduxStore={reduxStore} />
                    )
                })}
            </ul>
        );
    }
});

export { List }