import template from './user-list.tpl.html';


export let UserListComponent = {
    template,
    selector: 'userList',
    bindings: {
      users: '<'
    },
    controller: class UserListCtrl {
        constructor() {
            this.predicate = 'firstName';
            this.reverse  = true;
        }

        order(predicate) {
            if (this.predicate === predicate) {
                this.reverse = !this.reverse;
            } else {
                this.predicate = predicate;
                this.reverse = false;
            }
        }
    },
};


