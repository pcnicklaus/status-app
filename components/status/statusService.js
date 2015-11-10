// components/status/statusService.js

(function() {

  'use strict';

  angular
    .module('statusUpdatin')
    .factory('Status', StatusService);

  function StatusService($firebaseArray) {
    var ref = new Firebase("https://status-updatin.firebaseio.com/status");
    return $firebaseArray(ref);
  }

})();
