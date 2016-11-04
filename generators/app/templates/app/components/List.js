import React from 'react';
import { Provider } from 'react-redux'
import { ListItem } from './ListItem'
import { ListItemAsync } from './ListItemAsync'

var List = React.createClass({
    propTypes: {
        store: React.PropTypes.object,
        items: React.PropTypes.array
    },
    render: function() {
        return (
            <Provider store={this.props.store}>
                <ul>
                    {this.props.items.map(function (item) {
                        if (item.type === 'async') {
                            return (
                                <ListItemAsync key={item.id} item={item} />
                            )
                        } else {
                            return (
                                <ListItem key={item.id} item={item} />
                            )
                        }
                    })}
                </ul>
            </Provider>
        );
    }
});

export { List }