import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Driver } from './Driver';

class Root extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Driver items={this.props.items} />
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object,
    items: PropTypes.array
};

export { Root };
