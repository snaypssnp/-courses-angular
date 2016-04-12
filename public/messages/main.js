
(function() {
    angular.module('app', ["ui.router"])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('messages', {
                url: '/messages/{messageType:inbox|outbox}',
                templateUrl: 'messages.list.html',
                resolve: {
                    messages: function($timeout) {
                        return [
                            {id: 1, subject: 'Первое сообщение', message: '111 1111 1111', type: 'inbox'},
                            {id: 2, subject: 'Второе сообщение', message: '222 222 2222 ', type: 'inbox'},
                            {id: 3, subject: 'Третье сообщение', message: '3333 3333 3333 3333', type: 'outbox'},
                            {id: 4, subject: 'Четвертое сообщение', message: '4444 44444 44444 4444', type: 'outbox'},
                        ]
                    }
                },
                controller: function(messages, $stateParams) {
                    this.messages = messages;
                    this.messageType = $stateParams.messageType;
                },
                controllerAs: '$ctrl'

            })

            .state('messages.detail', {
                url: '/detail/{messageId:int}',
                resolve: {
                    message: function($stateParams, messages) {
                        return messages.filter(function(item) {
                            return item.id === $stateParams.messageId;
                        })[0];

                    }
                },
                templateUrl: ' messages.detail.html',
                controller: function($scope, message) {
                    $scope.message = message;
                },
                controllerAs: '$ctrl'
            });

            $urlRouterProvider.otherwise('/messages/inbox');
    });
})();