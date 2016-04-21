import template from './message-list.tpl.html';

export let MessageListComponent = {
  template,
  selector: 'messageList',
  bindings: {
    messages: '<'
  },
  controller: class MessageListCtrl {
    /* @ngInject */
    constructor($stateParams, filterFilter) {
      this.typeMessage = $stateParams.typeMessage;
    }
  }
};


