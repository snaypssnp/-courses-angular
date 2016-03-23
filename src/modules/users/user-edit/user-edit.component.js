import template from './user-edit.tpl.html';

export let UserEditComponent = {
    template,
    selector: 'userEdit',
    bindings: {
        user: '<'
    },
    controller: class UserEditCtrl {

        /* @ngInject */
        constructor(UsersService, $stateParams, $state) {
            Object.assign(this, {UsersService, $stateParams, $state});
        }

        updateUser() {
           this.UsersService
               .update(this.$stateParams.userId)
               .then(() => {
                   this.$state.go('users');
               });
        }
    },
};