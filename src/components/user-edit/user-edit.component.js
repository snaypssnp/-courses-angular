import template from './user-edit.html';

export let UserEditComponent = {
    template,
    selector: 'userEdit',
    controller: class UserEditCtrl {

        /* @ngInject */
        constructor(UsersService, $stateParams, $state) {
            Object.assign(this, {UsersService, $stateParams, $state});

            UsersService.getItem($stateParams.userId)
                .then((result) => {
                    this.user = result;
                });
        }

        updateUser() {
           this.UsersService
               .update(+this.$stateParams.userId)
               .then(() => {
                   this.$state.go('users');
               });
        }
    },
};