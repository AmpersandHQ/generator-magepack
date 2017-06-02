var path = require('path');

const PATHS = {
    app: path.join(__dirname, './view/frontend/web/js/src/index.js'),
    build: path.join(__dirname, './view/frontend/web/js/dist')
};

module.exports = {
    entry: [
        PATHS.app
    ],
    output: {
        path: PATHS.build,
        libraryTarget: 'umd',
        filename : 'app.min.js',
        publicPath: '/view/frontend/web/js/'
    },
    resolve: {
        modules: [
            path.join(__dirname + '/node_modules/')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loaders: ['eslint-loader'],
                enforce: 'pre',
                include: path.join(__dirname + '/app/**/*')
            },
            {
                test: /\.js?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        'redux': 'umd redux',
        'react': 'umd react',
        'react-dom' : 'umd react-dom',
        'prop-types' : 'umd prop-types',
        'react-redux': 'umd react-redux',
        'redux-thunk': 'umd redux-thunk'
    },
    devtool: 'source-map'
};
