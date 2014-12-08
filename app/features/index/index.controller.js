(function () {
  'use strict';

  angular.module('app.index').controller('Index', Index);

  function Index() {
    var vm = this;

    vm.message = 'hello, from index';
  }
}());