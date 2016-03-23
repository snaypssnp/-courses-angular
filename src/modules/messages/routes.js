/* @ngInject */
function routerConfig ($stateProvider) {
    $stateProvider

        .state('messages', {
            url: '/messages/:typeMessage',
            template: '<message-list messages="$ctrl.messages"></message-list>',
            resolve: {
                /* @ngInject */
                messages: function(MessagesService) {
                    return MessagesService.getAll();
                }
            },

            /* @ngInject */
            controller: function(messages) {
                this.messages = messages;
            },
            controllerAs: '$ctrl'
        })

        .state('message-show', {
            url: '/message/{messageId:int}',
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
        })

        .state('message-create', {
            url: '/create/message',
            template: '<message-create></message-create>',

        })
}


export default routerConfig;