'use strict';
const path = require('path');

const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const here = require('path-here');
const _ = require('lodash');

const NODE_ENV = process.env.NODE_ENV || 'development';
const exclude = /node_modules/;

let configFunctions = {
    development: getDevConfig,
    production: getProdConfig,
    test: getTestConfig,
};
let config = configFunctions[NODE_ENV]();

addCommonPlugins();

module.exports = config;

//Dev config
function getDevConfig() {
    var devConfig = {
        context: here('src'),
        entry: './app.js',
        output: {
            path: here('public/dist'),
            publicPath: '/dist/',
            filename: 'scripts.js'
        },
        stats: {
            colors: true,
            reasons: true
        },

        devtool: 'cheap-module-inline-source-map',

        plugins: [
            new WebpackNotifierPlugin(),
            new ExtractTextPlugin('styles.css'),
            new ngAnnotatePlugin({ add: true}),
        ],

        module: {
            loaders: _.union(
                getJavaScriptLoaders(),
                [
                    {
                        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        include: exclude,
                        loader: 'file?name=[1]&regExp=node_modules/(.*)'
                    },
                    {
                        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                        exclude: exclude,
                        loader: 'file?name=[name].[ext]'
                    },
                    {
                        test: /\.html$/,
                        exclude: exclude,
                        loader: 'html'
                    },
                    {
                        test: /\.json$/,
                        loader: 'json',
                        exclude: exclude,
                    },
                    {
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract('style', 'css')
                    },
                ]
            )
        },
    };
    return devConfig;
}

function getProdConfig() {
    var prodConfig = getDevConfig();

    _.union(prodConfig.plugins, [
        new cleanPlugin(['public/dist']),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    ])
    return prodConfig;
}

//Production config
function getJavaScriptLoaders() {
    if (NODE_ENV !== 'test' && process.env.COVERAGE !== 'true') {
        return [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: exclude
            }
        ];
    } else {
        return [
            {
                test: /\.spec\.js$/, // include only mock and test files
                loaders: ['babel'],
                exclude: exclude
            },
            {
                test: /\.js$/,
                loaders: ['isparta'],
                exclude: /node_modules|\.spec.js$/ // exclude node_modules and test files
            }
        ];
    }
}

function getTestConfig() {
    return _.merge({}, getDevConfig(), {
        entry: './webpack.test.js'
    });
}

function addCommonPlugins() {
    config.plugins = config.plugins || [];

    config.resolve =  {
        alias: {
            services: here('src/modules/services')
        },
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],
    };

    config.resolveLoader =  {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    };
}


