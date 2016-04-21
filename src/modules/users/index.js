import angular from 'angular';
import UsersService from 'services/users.service';
import routerConfig from './routes.js';

import {UserListComponent} from './user-list/user-list.component';
import {UserItemComponent} from './user-item/user-item.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserCreateComponent} from './user-create/user-create.component';

export default angular.module('app.users', [])
  .component(UserListComponent.selector, UserListComponent)
  .component(UserEditComponent.selector, UserEditComponent)
  .component(UserCreateComponent.selector, UserCreateComponent)
  .directive(UserItemComponent.selector, () => UserItemComponent)
  .service('UsersService', UsersService)
  .config(routerConfig);