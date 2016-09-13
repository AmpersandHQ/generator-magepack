define(["react", "react-dom", "redux.min", "app.min"], function(React, ReactDOM, Redux, List) {
    // get our DOM node to render this app
    var mountNode = document.querySelector('#reactapp');
    // create the Redux store and enable Redux dev tools
    var store = Redux.createStore(List.list, DATA, window.devToolsExtension && window.devToolsExtension());
    // our render function
    function render() {
        ReactDOM.render(React.createElement(List.default, {
            store: store,
            items: store.getState().items,
        }), mountNode);
    }
    // re-render on redux store changes 
    store.subscribe(render);
    // the initial app render
    render();
});