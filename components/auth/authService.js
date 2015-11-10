(function() {
  'use strict';

  angular
    .module('statusUpdatin')
    .factory('Auth', AuthService);

  function AuthService($firebaseAuth) {
    var ref = new Firebase("https://status-updatin.firebaseio.com/");
    return $firebaseAuth(ref);
  }

})();
