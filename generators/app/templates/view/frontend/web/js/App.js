define(
    ['react', 'react-dom', 'prop-types', 'redux', 'react-redux', 'redux-thunk', 'app.min'], 
    function(React, ReactDOM, PropTypes, Redux, ReactRedux, ReduxThunk, ReactApp) {

        var mountNode = document.querySelector('#reactapp');

        var composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

        var store = Redux.createStore(
            ReactApp.reducers,
            window.DATA,
            composeEnhancers(Redux.applyMiddleware(ReduxThunk.default))
        );

        function render() {
            ReactDOM.render(React.createElement(ReactApp.default, {
                store: store,
                items: store.getState().items,
            }), mountNode);
        }

        store.subscribe(render);
        render();
});