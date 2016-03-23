import angular from 'angular';

import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import LoaderDirective from './loader/loader.directive';

export default angular.module('app.general', [])
    .component(BreadcrumbComponent.selector, BreadcrumbComponent)
    .directive(LoaderDirective.selector, LoaderDirective)