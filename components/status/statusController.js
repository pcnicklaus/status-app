(function() {

  'use strict';

  angular
    .module('statusUpdatin')
    .controller('StatusController', StatusController);

  function StatusController($rootScope, Status, md5) {

    var vm = this;

    vm.addStatus = addStatus;
    vm.deleteStatus = deleteStatus;
    vm.md5 = md5;
    vm.statusData = Status;

    function addStatus() {
      if(vm.statusText) {
        vm.statusData.$add({

          // Add the status data to Firebase
          date: Firebase.ServerValue.TIMESTAMP,
          text: vm.statusText,
          user: {
            username: $rootScope.loggedInUserData.username,
            email: $rootScope.loggedInUserData.email
          }
        });
        vm.statusText = '';
      }
    }

     function deleteStatus(status) {

      // Remove the status that was passed in
      // from the views
      vm.statusData.$remove(status);
    }
  }

})();
