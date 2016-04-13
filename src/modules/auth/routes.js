/* @ngInject */
function routerConfig ($stateProvider) {
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
}
export default routerConfig;