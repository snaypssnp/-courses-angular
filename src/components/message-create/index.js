import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import Services from 'services';

import {MessageCreateComponent} from './message-create.component.js';

export default angular.module('app.messageCreate', [AngularUiRouter, Services.name])
    .component(MessageCreateComponent.selector, MessageCreateComponent)
    .config(config)
;

/* @ngInject */
function config ($stateProvider) {
    $stateProvider.state('message-create', {
        url: '/create/message',
        template: '<message-create></message-create>',

    });
}
