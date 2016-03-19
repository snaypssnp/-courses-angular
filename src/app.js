'use strict';

//css vendor
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//css custom
import './assets/css/custom-styles.css';


import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';



import UserList from './components/user-list';
import Dashboard from './components/dashboard';

import Services from './services';

angular
    .module('app', [
        AngularUiRouter,

        Services.name,

        UserList.name,
        Dashboard.name
    ])
    .run(function() {
        console.log('app run');
    })

