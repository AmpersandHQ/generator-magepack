import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

Root.propTypes = {
    items: PropTypes.array
};

export default Root;
