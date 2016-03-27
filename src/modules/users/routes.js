/* @ngInject */
function routerConfig ($stateProvider) {
    $stateProvider

        .state('users', {
            abstract: true,
            url: '/users',
            template: '<ui-view/>',
        })

        .state('users.list', {
            url: '/list',
            template: '<user-list users="$ctrl.users"></user-list>',
            resolve: {
                /* @ngInject */
                users: function(UsersService) {
                    return UsersService.getAll();
                }
            },
            /* @ngInject */
            controller: function(users) {
                this.users = users;
            },
            controllerAs: '$ctrl'
        })

        .state('users.edit', {
            url: '/edit/{userId:int}',
            template: '<user-edit user="$ctrl.user"></user-edit>',
            resolve: {
                /* @ngInject */
                user: function($stateParams, UsersService) {
                    return UsersService.getItem($stateParams.userId);
                }
            },
            /* @ngInject */
            controller: function(user) {
                this.user = user;
            },
            controllerAs: '$ctrl'
        })

        .state('users.create', {
            url: '/create',
            template: '<user-create></user-create>'
        })
}


export default routerConfig;