import angular from 'angular';
import {MessageItemComponent} from './message-item.component.js';
import Services from 'services';

export default angular.module('app.messageItem', [Services.name])
    .directive(MessageItemComponent.selector, () => MessageItemComponent)
;