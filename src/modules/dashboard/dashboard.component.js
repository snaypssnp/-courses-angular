import template from './dashboard.tpl.html';
import controller from './dashboard.ctrl';

export let DashboardComponent = {
    template,
    selector: 'dashboard',
    bindings: {
        users: '<',
        messages: '<',
    },
    controller
};