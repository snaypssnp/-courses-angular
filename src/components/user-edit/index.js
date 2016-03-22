import angular from 'angular';
import {UserEditComponent} from './user-edit.component.js';
import Services from 'services';

export default angular.module('app.userEdit', [])
    .component(UserEditComponent.selector, UserEditComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('users-edit', {
        url: '/user/:userId',
        template: '<user-edit user="$ctrl.user"></user-edit>',
        resolve: {
            /* @ngInject */
            user: function($stateParams, UsersService) {
                return UsersService.getItem($stateParams.userId);
            }
        },
        /* @ngInject */
        controller: function(user) {
            this.user = user;
        },
        controllerAs: '$ctrl'
    });
}