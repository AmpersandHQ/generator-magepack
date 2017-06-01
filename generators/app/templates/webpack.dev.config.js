var baseConfig = require('./webpack.base.config.js');
var DashboardPlugin = require('webpack-dashboard/plugin');
var Webpack = require('webpack');

var config = Object.create(baseConfig);

config.entry.unshift('react-hot-loader/patch');
config.entry.unshift('webpack-dev-server/client?http://localhost:8080');
config.entry.unshift('webpack/hot/only-dev-server');

config.plugins = [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new DashboardPlugin()
];

config.devServer = {
    publicPath: '/view/frontend/web/js/',
    hot: true,
    quiet: true, // lets WebpackDashboard do its thing
    historyApiFallback: true
}

module.exports = config;