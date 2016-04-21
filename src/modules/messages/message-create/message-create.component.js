import template from './message-create.tpl.html';

export let MessageCreateComponent = {
  template,
  selector: 'messageCreate',
  controller: class MessageCreateCtrl {
    /* @ngInject */
    constructor(MessagesService, $state) {
      Object.assign(this, {MessagesService, $state});
    }

    addMessage() {
      this.MessagesService
        .add(this.message)
        .then(() => {
          this.$state.go('messages.list', {typeMessage: this.message.type});
        });
    }
  },

};