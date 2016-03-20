import template from './message-list.html';

export let MessageListComponent = {
    template,
    selector: 'messageList',
    controller: class MessageListCtrl {

        /* @ngInject */
        constructor(MessagesService) {
            MessagesService.getAll().then((result) => {
                this.messages = result || [];
            });
        }
    },
};


