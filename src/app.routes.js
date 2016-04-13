import template from './views/account.tpl.html';

/* @ngInject */
export default function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            abstract: true,
            template,
        });

    $urlRouterProvider.otherwise('/dashboard');
}