(function() {
  'use strict';

  angular
    .module('statusUpdatin')
    .controller('AuthController', AuthController);

  function AuthController(Auth, User, $state) {

    console.log('firing')

    var vm = this;

    vm.createUser = createUser;
    vm.login = login;
    vm.loggedInUser;

    function createUser() {
      console.log('createUser Firing')

      // If there is already a user logged in,
      // log them out before proceeding
      Auth.$unauth();

      Auth.$createUser({
        email: vm.email,
        password: vm.password
      }).then(function(userData) {
        login();
      }).catch(function(error) {
        vm.error = error;
      });
    }

    function saveUser(userData) {
      console.log('saveUser Firing')

      var user = User.newUserRef(userData);
      user.username = vm.username;
      user.email = vm.email;

      user.$save().then(function(success) {
        vm.username = null;
        vm.email = null;
        vm.password = null;
        $state.go('status');
      }, function(error) {
        console.log("there was an error! " + error);
      });
    }


    function login() {
      console.log('login Firing')

      Auth.$authWithPassword({
        email: vm.email,
        password: vm.password
      }).then(function(data) {
        vm.email = null;
        vm.password = null;
        $state.go('/status');
      }).catch(function(error) {
        console.log(error);
      });
    }
  }

})();
