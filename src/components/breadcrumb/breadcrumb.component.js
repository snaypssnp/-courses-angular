import template from './breadcrumb.html';

export let BreadcrumbComponent = {
    template,
    selector: 'breadcrumb',
    controller: class Breadcrumb {

        /* @ngInject */
        constructor($rootScope) {
            $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => {
                let str = toState.name.split('-').join(' ');
                let firstLetter = str.charAt(0).toUpperCase();
                this.title = firstLetter + str.slice(1);
            });
        }
    },
};
