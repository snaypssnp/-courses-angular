import template from './breadcrumb.tpl.html';

export let BreadcrumbComponent = {
  template,
  selector: 'breadcrumb',
  controller: class Breadcrumb {

    /* @ngInject */
    constructor($rootScope) {
      $rootScope.$on('$stateChangeStart', (event, toState) => {
        this.title = toState.name.split('.').join(' ');
      });
    }
  },
};
