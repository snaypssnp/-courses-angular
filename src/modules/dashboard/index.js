import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';

import MessagesService from 'services/messages.service';
import UsersService from 'services/users.service';
import routerConfig from './routes';

import {DashboardComponent} from './dashboard.component';

export default angular.module('app.dashboard', [])
    .component(DashboardComponent.selector, DashboardComponent)
    .factory('MessagesService', MessagesService)
    .factory('UsersService', UsersService)
    .config(routerConfig);