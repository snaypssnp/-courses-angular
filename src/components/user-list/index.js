import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';

import Services from 'services';
import UserItem from 'components/user-item';

import {UserListComponent} from './user-list.component.js';

export default angular.module('app.userList', [UserItem.name])
    .component(UserListComponent.selector, UserListComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('users', {
        url: '/users',
        template: '<user-list></user-list>'
    });
}
