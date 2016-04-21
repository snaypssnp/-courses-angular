import angular from 'angular';

import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {NavbarSideComponent} from './navbar-side/navbar-side.component.js';
import {NavbarTopComponent} from './navbar-top/navbar-top.component.js';
import {NavbarItemComponent} from './navbar-item/navbar-item.component.js';
import LoaderDirective from './loader/loader.directive';

export default angular.module('app.shared', [])
  .component(BreadcrumbComponent.selector, BreadcrumbComponent)
  .component(NavbarSideComponent.selector, NavbarSideComponent)
  .component(NavbarTopComponent.selector, NavbarTopComponent)
  .directive(NavbarItemComponent.selector, () => NavbarItemComponent)
  .directive(LoaderDirective.selector, LoaderDirective)