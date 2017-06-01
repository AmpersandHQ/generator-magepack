require.config({
    paths:{
        'ReactApp': 'dist/app.min',
        'react': '//unpkg.com/react/dist/react',
        'react-dom': '//unpkg.com/react-dom/dist/react-dom',
        'prop-types': '//unpkg.com/prop-types/prop-types',
        'redux': '//unpkg.com/redux/dist/redux',
        'react-redux': '//unpkg.com/react-redux/dist/react-redux',
        'redux-thunk': '//unpkg.com/redux-thunk/dist/redux-thunk',
        'react-router': '//unpkg.com/react-router/dist/react-router'
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
});