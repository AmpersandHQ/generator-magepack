process.env.NODE_ENV = 'production';

var baseConfig = require('./webpack.base.config.js');
var Webpack = require('webpack');

var config = Object.create(baseConfig);
config.plugins = [
    new Webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: false,
        compress: {
            warnings: false
        }
    })
];

module.exports = config;