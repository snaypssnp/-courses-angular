import angular from 'angular';

import MessagesService from './messages.service';
import routerConfig from './routes';

import {MessageListComponent} from './message-list/message-list.component';
import {MessageItemComponent} from './message-item/message-item.component';
import {MessageShowComponent} from './message-show/message-show.component';
import {MessageCreateComponent} from './message-create/message-create.component';

export default angular.module('app.messages', [])
    .component(MessageListComponent.selector, MessageListComponent)
    .component(MessageShowComponent.selector, MessageShowComponent)
    .component(MessageCreateComponent.selector, MessageCreateComponent)
    .directive(MessageItemComponent.selector, () => MessageItemComponent)
    .service('MessagesService', MessagesService)
    .config(routerConfig);