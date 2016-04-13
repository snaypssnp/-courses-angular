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
import SharedModule from './modules/shared';

import configRoutes from './app.routes.js';

angular
    .module('app', [
        AngularUiRouter,
        AngularMessages,
        AngularFire,

        DashboardModule.name,
        SharedModule.name,
        UsersModule.name,
        MessagesModule.name
    ])
    .constant('FIREBASE_URI', 'https://snayps.firebaseio.com/')
    .config(configRoutes);