/* @ngInject */
export default function runConfig($rootScope, $state, AuthService) {
  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
    if (toState.authenticate && !AuthService.isAuthorized()) {
      $state.transitionTo("auth.login");
      event.preventDefault();
    }
  });
}