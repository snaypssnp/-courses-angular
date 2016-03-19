import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';

import Services from 'services';

import {UserListComponent} from './user-list.component.js';

export default angular.module('app.userList', [])
    .component(UserListComponent.selector, UserListComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('user-list', {
        url: '/users',
        template: '<user-list users="$ctrl.users"></user-list>',

        resolve: {
            users:  function(UsersService) {
                return UsersService.getAll();
            },
        },

        /* @ngInject */
        controller: function(users) {
            this.users = users
        },
        controllerAs: '$ctrl'
    });
}

