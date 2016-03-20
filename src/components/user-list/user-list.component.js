import template from './user-list.html';

export let UserListComponent = {
    template,
    selector: 'userList',
    controller: class UserListCtrl {

        /* @ngInject */
        constructor(UsersService) {
            UsersService.getAll().then((result) => {
                console.log('result', result);
                this.users = result || [];
            });
        }
    },
};


