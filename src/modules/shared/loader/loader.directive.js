import template from './loader.tpl.html';
export default directive;

/* @ngInject */
function directive($rootScope) {
  return {
    template,
    scope: {
      show: '='
    },
    restrict: 'E',
    link: function (scope) {
      $rootScope.$on('$stateChangeStart', () => {
        scope.show = true;
        angular.element(document.querySelector('#main-view')).css('display', 'none');
      });

      $rootScope.$on('$stateChangeSuccess', () => {
        scope.show = false;
        angular.element(document.querySelector('#main-view')).css('display', 'block');
      });
    }
  }
};

directive.selector = 'loader';
