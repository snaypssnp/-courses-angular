import template from './dashboard.html';

export let DashboardComponent = {
    template,
    selector: 'dashboard',
    bindings: {
        users: '<',
        messages: '<',
    },
    controller: class DashboardCtrl {
        /* @ngInject */
        constructor(filterFilter) {
            this.countUsers = this.users.length;
            this.countOutboxes = filterFilter(this.messages, {type: 'outbox'}).length;
            this.countInboxes = filterFilter(this.messages, {type: 'inbox'}).length;
        }
    }
};