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
        template: '<message-show message="$ctrl.message"></message-show>',
        resolve: {
            /* @ngInject */
            message: function(MessagesService, $stateParams) {
                return  MessagesService.getItem($stateParams.messageId);
            }
        },
        /* @ngInject */
        controller: function(message) {
            this.message = message;
        },
        controllerAs: '$ctrl'
    });
}

