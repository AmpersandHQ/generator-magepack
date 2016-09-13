var path = require('path');

const PATHS = {
    app: path.join(__dirname, './index.js'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: [
        PATHS.app
    ],
    output: {
        path: PATHS.build,
        libraryTarget: 'umd',
        filename : 'app.min.js',
        publicPath: '/example/js/'
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loaders: ['eslint'],
                include: './app/**/*'
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    externals: {
        'react': 'umd react',
        'react-dom' : 'umd react-dom'
    },
    devtool: 'source-map'
};
