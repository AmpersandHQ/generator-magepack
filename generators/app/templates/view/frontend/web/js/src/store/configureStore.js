/**
 * configureStore
 *
 * @copyright (c) Ampersand Commerce 2018
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';


var composeEnhancers =
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
}

export default configureStore;
