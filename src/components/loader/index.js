import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';

import {LoaderComponent} from './loader.component.js';

export default angular.module('app.loader', [AngularUiRouter])
    .component(LoaderComponent.selector, LoaderComponent)
;