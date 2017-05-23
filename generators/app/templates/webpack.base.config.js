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
    resolve: {
        modules: [
            path.join(__dirname + '/node_modules/')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loaders: ['eslint'],
                enforce: "pre",
                include: path.join(__dirname + '/app/**/*')
            },
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
