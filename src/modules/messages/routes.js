/* @ngInject */
function routerConfig ($stateProvider) {
    $stateProvider
        .state('messages', {
            abstract: true,
            url: '/messages',
            template: '<ui-view />',
            parent: 'main',
            authenticate: true
        })

        .state('messages.list', {
            url: '/list/{typeMessage: inbox|outbox}',
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
            controllerAs: '$ctrl',
        })

        .state('messages.show', {
            url: '/show/{messageId:int}',
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

        .state('messages.create', {
            url: '/create',
            template: '<message-create></message-create>',

        })
}


export default routerConfig;