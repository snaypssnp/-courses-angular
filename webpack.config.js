'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {

    context: `${__dirname}/src`,
    entry: './app',
    output: {
        path: `${__dirname}/src/dist`,
        filename: 'scripts.js'
    },

    resolve: {
        alias: {
            'npm': `${__dirname}/node_modules`
        }
    },

    watch: NODE_ENV === 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV === 'development' ? 'cheap-module-inline-source-map' : null,

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },

            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)/,
                include: /\/node_modules\//,
                loader: 'file?name=[1]&regExp=node_modules/(.*)'
            },

            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                exclude: /\/node_modules\//,
                loader: 'file?name=[name].[ext]'
            },

            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ngAnnotatePlugin({
            add: true
        }),
        new cleanPlugin(['src/dist']),
    ]
}


