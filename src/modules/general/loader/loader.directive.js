import template from './loader.tpl.html';
export default directive;

/* @ngInject */
function directive ($rootScope)  {
    return {
        template,
        scope: {},
        restrict:'E',
        link: function (scope) {
            $rootScope.$on('$stateChangeStart', () => {
                scope.show = true;
                angular.element(document.querySelector('ui-view')).html('');
            });

            $rootScope.$on('$stateChangeSuccess', () => {
                scope.show = false;
            })
        }
    }
};

directive.selector = 'loader';
