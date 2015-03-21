'use strict';

/**
 * @ngdoc function
 * @name asknsolveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the asknsolveApp
 */
angular.module('asknsolveApp')
  .controller('MainCtrl', function ($scope, $location) {
  
    // user data
    $scope.user = {
        nick: 'Desko27',
        name: 'Ismael',
        surname: 'Ramón',
        rank: 3,
        exp: 0.2
    };
    
    // topbar & sidebar
    $scope.bars = true;
    
    // finish please-wait screen
    // ** don't finish it in login screen since it's gonna be fast-redirected
    if ($location.$$path !== '/login') window.loading_screen.finish();
    
  });
