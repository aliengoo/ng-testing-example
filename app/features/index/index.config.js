(function () {
  'use strict';

  angular.module('app.index').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {

    $stateProvider.state('index', {
      url: '/index',
      templateUrl: 'index/index.html',
      controller: 'Index',
      controllerAs : 'vm'
    });
  }
}());