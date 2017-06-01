define(
    ['react', 'react-dom', 'prop-types', 'redux', 'react-redux', 'redux-thunk', 'dist/app.min'], 
    function(React, ReactDOM, PropTypes, Redux, ReactRedux, ReduxThunk, ReactApp) {

        var mountNode = document.querySelector('#reactapp');

        var store = Redux.createStore(
            ReactApp.reducers,
            window.DATA, 
            Redux.compose(
                Redux.applyMiddleware(ReduxThunk.default),
                window.devToolsExtension && window.devToolsExtension()
            )
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