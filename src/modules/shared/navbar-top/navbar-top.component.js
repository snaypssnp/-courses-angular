import template from './navbar-top.tpl.html';
import items from './navbar-top.json';

export let NavbarTopComponent = {
    template,
    selector: 'navbarTop',
    controller: class {
        constructor () {
            this.items = items;
        }
    }
};