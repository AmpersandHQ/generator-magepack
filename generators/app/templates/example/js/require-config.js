require.config({
    paths:{
        "HelloWorld": "dist/app.min"
    },
    shim:{
        'HelloWorld': {
            'deps':['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'react-router']
        }
    }
});