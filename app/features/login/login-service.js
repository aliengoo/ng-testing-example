(function () {
  'use strict';

  angular.module('app.login').factory('loginService', loginService);

  loginService.$inject = ['$resource', 'apiUrl'];

  function loginService($resource, apiUrl) {
    return $resource(apiUrl + 'login/:action/:id', {
      action: '@action',
      id: '@id'
    }, {});
  }
}());