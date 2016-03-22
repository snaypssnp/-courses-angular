import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import Services from 'services';

import {DashboardComponent} from './dashboard.component.js';

export default angular.module('app.dashboard', [AngularUiRouter, Services.name])
    .component(DashboardComponent.selector, DashboardComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/',
        template: `<dashboard users="$ctrl.users"
                              messages="$ctrl.messages">
                   </dashboard>`,
        resolve: {

            /* @ngInject */
            users: function(UsersService) {
                return UsersService.getAll();
            },

            /* @ngInject */
            messages: function(MessagesService) {
                return MessagesService.getAll()
            }
        },

        /* @ngInject */
        controller: function(users, messages) {
            Object.assign(this, {users, messages});
        },
        controllerAs: '$ctrl'
    });
}
