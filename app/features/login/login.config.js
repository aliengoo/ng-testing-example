(function () {
  'use strict';

  angular.module('app.login').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'Login',
      controllerAs : 'vm'
    });
  }
}());