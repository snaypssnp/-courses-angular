import angular from 'angular';
import Firebase from 'firebase';
import AngularFire from 'angularfire';

import UsersService from 'services/users.service.js';
import FIREBASE_URI from 'services/firebase-uri.const.js';

export default angular
    .module('app.services', [AngularFire])
    .factory('UsersService', UsersService)
    .constant('FIREBASE_URI', FIREBASE_URI)
;
