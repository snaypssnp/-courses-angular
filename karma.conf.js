'use strict';
const path = require('path');

const _ = require('lodash');
const here = require('path-here');

const webpackConfig = require('./webpack.config.js');
const entry = path.resolve(webpackConfig.context, webpackConfig.entry);

let preprocessors = {};
preprocessors[entry] = ['webpack'];

let isCoverage = process.env.COVERAGE === 'true';

if (isCoverage) {
    console.log('-- recording coverage --');
}

module.exports = function (config) {
    config.set({
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            entry,
        ],

        webpack: webpackConfig,

        webpackServer: {
            noInfo: true // Suppress all webpack messages, except errors
        },

        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'coverage/', subdir: '.'},
                {type: 'json', dir: 'coverage/', subdir: '.'},
                {type: 'text-summary'}
            ]
        },


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: preprocessors,


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: getReporters(),


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        plugin: [
            'karma-webpack',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage'
        ]
    })
};

function getReporters() {
    var reps = ['progress'];
    if (isCoverage) {
        reps.push('coverage');
    }
    return reps;
}
