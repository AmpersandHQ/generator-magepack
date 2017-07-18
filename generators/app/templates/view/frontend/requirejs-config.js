/* eslint-disable no-unused-vars */
var config = {
    paths:{
        'ReactApp': 'dist/app.min'
    },
    shim:{
        'ReactApp': {
            'deps':[
                'react',
                'react-dom',
                'prop-types',
                'redux',
                'react-redux',
                'redux-thunk',
                'react-router'
            ]
        }
    }
};