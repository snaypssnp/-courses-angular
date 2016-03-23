/* @ngInject */
function routerConfig ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/',
        template: `<dashboard users="$ctrl.users"
                              messages="$ctrl.messages">
                   </dashboard>`,
        resolve: {

            /* @ngInject */
            users: function(UsersService) {
                return UsersService.getAll();
            },

            /* @ngInject */
            messages: function(MessagesService) {
                return MessagesService.getAll()
            }
        },

        /* @ngInject */
        controller: function(users, messages) {
            Object.assign(this, {users, messages});
        },
        controllerAs: '$ctrl'
    });
}


export default routerConfig;