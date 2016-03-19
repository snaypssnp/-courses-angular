import template from './user-list.html';

export let UserListComponent = {
    template,
    selector: 'userList',
    controller,
    bindings: {
        users: '=',
    }
};

/* @ngInject */
function controller() {

}


