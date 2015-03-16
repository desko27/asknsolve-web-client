'use strict';

/**
 * @ngdoc function
 * @name asknsolveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the asknsolveApp
 */
angular.module('asknsolveApp')
  .controller('MainCtrl', function ($scope) {
  
    // user data
    $scope.user = {
        nick: 'Desko27',
        name: 'Ismael',
        surname: 'Ramón',
        rank: 12,
        exp: 0.2
    };
    
  });
