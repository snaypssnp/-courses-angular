import template from './user-create.tpl.html';

export let UserCreateComponent = {
    template,
    selector: 'userCreate',
    controller: class UserCreateCtrl {
        /* @ngInject */
        constructor(UsersService, $state) {
            Object.assign(this, {UsersService, $state});
        }

        addUser() {
            this.UsersService
                .add(this.user)
                .then(() => {
                   this.$state.go('users.list');
                });
        }
    },

};