const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                loader: 'ignore-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: 'url-loader',
            },
        ],
    },
    externals: [webpackNodeExternals()],
};
