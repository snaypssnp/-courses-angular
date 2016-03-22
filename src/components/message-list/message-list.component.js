import template from './message-list.html';

export let MessageListComponent = {
    template,
    selector: 'messageList',
    bindings: {
        messages: '<'
    },
    controller: class MessageListCtrl {
        /* @ngInject */
        constructor($stateParams, filterFilter) {
            this.typeMessage = $stateParams.typeMessage;
        }
    }
};


