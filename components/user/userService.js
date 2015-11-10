// components/user/userService.js

(function() {

  'use strict';

  angular
    .module('statusUpdatin')
    .factory('User', UserService);

  function UserService($firebaseObject) {

    function newUserRef(user) {
      var ref = new Firebase("https://status-updatin.firebaseio.com/users/" + user.uid);
      return $firebaseObject(ref);
    }

    function getUserData(user) {
      var ref = new Firebase("https://status-updatin.firebaseio.com/users/" + user);
      return $firebaseObject(ref);
    }

    function getLoggedInUser() {
      var user = localStorage.getItem('firebase:session::statusUpdatin');
      if(user) {
        return JSON.parse(user);
      }
    }

    return {
      newUserRef: newUserRef,
      getUserData: getUserData,
      getLoggedInUser: getLoggedInUser
    };

  }

})();
