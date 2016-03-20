import template from './user-edit.html';

export let UserEditComponent = {
    template,
    selector: 'userEdit',
    controller: class UserEditCtrl {

        /* @ngInject */
        constructor(UsersService, $stateParams) {
            Object.assign(this, {UsersService, $stateParams});

            UsersService.getItem($stateParams.userId)
                .then((result) => {
                    this.user = result;
                });
        }

        updateUser() {
           this.UsersService.update(+this.$stateParams.userId);
        }
    },
};