import template from './message-item.tpl.html';

export let MessageItemComponent = {
    template,
    selector: 'messageItem',
    controllerAs: '$ctrl',
    scope: {},
    bindToController: {
        message: '=',
        index: '@'
    },
    restrict: 'A',

    controller: class MessageItemCtrl {
        /* @ngInject */
        constructor(MessagesService) {
            Object.assign(this, {MessagesService});
        }

        removeMessage(message) {
            this.MessagesService.remove(message);
        }

    }
};
