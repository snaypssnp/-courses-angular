import angular from 'angular';

import {AuthLoginComponent} from './auth-login/auth-login.component';
import routerConfig from './routes';
import AuthService from 'services/auth.service';

export default angular.module('app.auth', [])
    .component(AuthLoginComponent.selector, AuthLoginComponent)
    .service('AuthService', AuthService)
    .config(routerConfig);