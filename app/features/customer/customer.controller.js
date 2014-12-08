(function () {
  'use strict';

  angular.module('app.customer').controller('Customer', Customer);

  function Customer() {
    var vm = this;

    vm.message = "hello, world";

  }
}());