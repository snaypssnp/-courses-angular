'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './assets/css/custom-styles.css';

import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import AngularMessages from 'angular-messages';
import Firebase from 'firebase';
import AngularFire from 'angularfire';

import DashboardModule from './modules/dashboard';
import UsersModule from './modules/users';
import MessagesModule from './modules/messages';
import GeneralModule from './modules/general';

angular
    .module('app', [
        AngularUiRouter,
        AngularMessages,
        AngularFire,

        //test
        DashboardModule.name,
        GeneralModule.name,
        UsersModule.name,
        MessagesModule.name
    ])
    .constant('FIREBASE_URI', 'https://snayps.firebaseio.com/')
    .config(config);

/* @ngInject */
function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}