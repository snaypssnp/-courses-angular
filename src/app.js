'use strict';

//css vendor
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//my css
import './assets/css/custom-styles.css';

//Vendor
import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';

//My components
import Dashboard from 'components/dashboard';
import UserList from 'components/user-list';
import UserEdit from 'components/user-edit';
import UserCreate from 'components/user-create';
import MessageList from 'components/message-list';
import MessageShow from 'components/message-show';
import MessageCreate from 'components/message-create';
import Services from 'services';

angular
    .module('app', [
        AngularUiRouter,

        Services.name,
        UserList.name,
        UserEdit.name,
        UserCreate.name,
        Dashboard.name,
        MessageList.name,
        MessageShow.name,
        MessageCreate.name
    ])
    .run(function () {
        console.log('app run');
    });