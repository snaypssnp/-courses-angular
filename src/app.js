'use strict';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './assets/css/custom-styles.css';

import angular from 'angular';

import AngularUiRouter from 'angular-ui-router';
import AngularMessages from 'angular-messages';
import Firebase from 'firebase';
import AngularFire from 'angularfire';

import AuthModule from './modules/auth';
import DashboardModule from './modules/dashboard';
import UsersModule from './modules/users';
import MessagesModule from './modules/messages';
import SharedModule from './modules/shared';

import routerConfig from './app.routes';
import runConfig from './app.run';

angular
  .module('app', [
    AngularUiRouter,
    AngularMessages,
    AngularFire,

    AuthModule.name,
    DashboardModule.name,
    SharedModule.name,
    UsersModule.name,
    MessagesModule.name

  ])
  .constant('FIREBASE_URI', 'https://snayps.firebaseio.com/')
  .config(routerConfig)
  .run(runConfig);