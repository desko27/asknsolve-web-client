'use strict';

/**
 * @ngdoc function
 * @name asknsolveApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the asknsolveApp
 */
angular.module('asknsolveApp')
  .controller('NewCtrl', function ($scope) {
    
    $scope.createTicket = function() {
        swal('¡Listo!', 'Tu ticket se ha incluido en la cola. Un técnico de soporte te atenderá cuando sea posible.', 'success');
    };
    
  });
