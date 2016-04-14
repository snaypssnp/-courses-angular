/* @ngInject */
function routerConfig($stateProvider) {
    $stateProvider
        .state('auth', {
            abstract: true,
            url: '/auth',
            template: '<ui-view />',
        })

        .state('auth.login', {
            url: '/login',
            template: '<auth-login></auth-login>',
        })
        .state('auth.logout', {
            url: '/logout',
            resolve: {
                /* @ngInject */
                logout: function (AuthService, $timeout, $state) {
                    AuthService.logout();
                    $timeout(function () {
                        $state.go('auth.login');
                    });
                }
            },
            authenticate: true
        })
}
export default routerConfig;