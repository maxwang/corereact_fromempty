const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new extractTextPlugin('allstyles.css');

module.exports = {
    entry: { 'main' : './ClientApp/app.js'},
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    plugins: [
        extractCSS,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: extractCSS.extract(['css-loader? minimize']) },
            { test: /\.js?$/,
            use: {
                loader: 'babel-loader', options: {
                    presets:
                    ['@babel/preset-env']
                }
            }
        },
        ]
    }
};