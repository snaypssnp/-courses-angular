import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';

import {BreadcrumbComponent} from './breadcrumb.component.js';

export default angular.module('app.breadcrumb', [AngularUiRouter])
    .component(BreadcrumbComponent.selector, BreadcrumbComponent)
;