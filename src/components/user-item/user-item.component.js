import template from './user-item.html';

export let UserItemComponent = {
    template,
    selector: 'userItem',
    controllerAs: '$ctrl',
    scope: {},
    bindToController: {
        user: '<',
        index: '@'
    },
    restrict: 'A',

    controller: class UserItemCtrl {
        /* @ngInject */
        constructor(UsersService) {
            Object.assign(this, {UsersService});
        }

        removeUser(user) {
            this.UsersService.remove(user);
        }

    }
};
