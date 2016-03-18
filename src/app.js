'use strict';

//css vendor
import 'npm/bootstrap/dist/css/bootstrap.css';
import 'npm/font-awesome/css/font-awesome.css';

//css custom
import './assets/css/custom-styles.css';


import angular from 'npm/angular';
import uiRouter from 'npm/angular-ui-router';

angular
    .module('app', [
        uiRouter,
    ])
    .run(function() {
        console.log('app run');
    });
