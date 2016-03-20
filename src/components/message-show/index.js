import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import Services from 'services';
import {MessageShowComponent} from './message-show.component.js';

export default angular.module('app.messageShow', [AngularUiRouter, Services.name])
    .component(MessageShowComponent.selector, MessageShowComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('message-show', {
        url: '/message/:messageId',
        template: '<message-show></message-show>',

    });
}

