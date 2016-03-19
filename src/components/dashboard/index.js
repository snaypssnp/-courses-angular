import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';

import {DashboardComponent} from './dashboard.component.js';

export default angular.module('app.dashboard', [])
    .component(DashboardComponent.selector, DashboardComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/',
        template: '<dashboard></dashboard>',
    });
}
