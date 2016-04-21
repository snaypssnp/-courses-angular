import angular from 'angular';

import MessagesService from 'services/messages.service';
import UsersService from 'services/users.service';
import routerConfig from './routes';

import {DashboardComponent} from './dashboard.component';

export default angular.module('app.dashboard', [])
  .component(DashboardComponent.selector, DashboardComponent)
  .service('MessagesService', MessagesService)
  .service('UsersService', UsersService)
  .config(routerConfig);