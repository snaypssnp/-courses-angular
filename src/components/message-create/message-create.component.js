import template from './message-create.html';

export let MessageCreateComponent = {
    template,
    selector: 'messageCreate',
    controller: class MessageCreateCtrl {
        /* @ngInject */
        constructor(MessagesService, $state) {
            Object.assign(this, {MessagesService, $state});
        }

        addMessage() {
            this.MessagesService
                .add(this.message)
                .then(() => {
                    this.message = null;
                });
        }
    },

};