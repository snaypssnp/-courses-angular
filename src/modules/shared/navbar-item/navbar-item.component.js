import template from './navbar-item.tpl.html';

export let NavbarItemComponent = {
  template,
  scope: {},
  bindToController: {
    item: '<'
  },
  restrict: 'A',
  selector: 'navbarItem',
  controller: function () {
  },
  controllerAs: '$ctrl',
};