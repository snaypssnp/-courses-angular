import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import Services from 'services';
import {UserCreateComponent} from './user-create.component.js';

export default angular.module('app.userCreate', [AngularUiRouter])
    .component(UserCreateComponent.selector, UserCreateComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('users-create', {
        url: '/create/user',
        template: '<user-create></user-create>',

    });
}