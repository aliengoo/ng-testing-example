(function () {
  'use strict';

  angular.module('app.customer').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {

    $stateProvider.state('customer', {
      url: '/customer',
      templateUrl: 'customer/customer.html',
      controller: 'Customer',
      controllerAs : 'vm'
    });
  }
}());