import template from './navbar-side.tpl.html';
import items from './navbar-side.json';

export let NavbarSideComponent = {
  template,
  selector: 'navbarSide',
  controller: class {
    constructor() {
      this.items = items;
    }
  }
};