import template from './message-show.html';

export let MessageShowComponent = {
    template,
    selector: 'messageShow',
    controller: class MessageShowCtrl {

        /* @ngInject */
        constructor(MessagesService, $stateParams, $state) {
            Object.assign(this, {MessagesService, $stateParams, $state});

            MessagesService.getItem($stateParams.messageId)
                .then((result) => {
                    this.message = result;
                });
        }
    },
};
