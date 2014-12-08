(function () {
  'use strict';

  angular.module('app.login').controller('Login', Login);

  function Login() {
    var vm = this;
    vm.credentials = {};

    vm.submit = function() {
      console.log(vm.credentials);
    };
  }
}());