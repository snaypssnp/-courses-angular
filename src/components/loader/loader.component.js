import template from './loader.html';

export let LoaderComponent = {
    template,
    selector: 'loader',
    controller: class Loader {

        /* @ngInject */
        constructor($rootScope) {
            $rootScope.$on('$stateChangeStart', () => {
                this.show = true;
                angular.element(document.querySelector('ui-view')).html('');
            });

            $rootScope.$on('$stateChangeSuccess', () => {
                this.show = false;
            })
        }
    },
};
