define([
    'react',
    'react-dom',
    'prop-types',
    'redux',
    'react-redux',
    'redux-thunk',
    'app.min'
],
function(
    React,
    ReactDOM,
    PropTypes,
    Redux,
    ReactRedux,
    ReduxThunk,
    ReactApp
) {
    var mountNode = document.querySelector('#reactapp');

    function render() {
        ReactDOM.render(
            React.createElement(ReactApp.default),
            mountNode
        );
    }

    render();
});
