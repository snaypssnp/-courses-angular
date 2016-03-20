import template from './user-create.html';

export let UserCreateComponent = {
    template,
    selector: 'userCreate',
    controller: class UserCreateCtrl {
        /* @ngInject */
        constructor(UsersService) {
            Object.assign(this, {UsersService});
        }

        addUser() {
            this.UsersService.add(this.user);
        }
    },

};