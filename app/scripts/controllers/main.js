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
        exp: 0.2,
        exp_bar: new Mprogress()
    };
    
    // show topbar & sidebar
    $scope.bars = true;
    
    // when topbar is ready
    $scope.$on('readyTopbar', function() {});
    
    // when sidebar is ready
    $scope.$on('readySidebar', function() {
        
        // set user exp bar ('#exp' is only available when sidebar.html loads)
        $scope.user.exp_bar = new Mprogress({minimum: 0, parent: '#exp'}).set($scope.user.exp);
    
        // include javascript for sidebar directly from sb-admin-2
        $.getScript('bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js');
    
    });
    
    // finish please-wait screen
    // ** don't finish it in login screen since it's gonna be fast-redirected
    if ($location.$$path !== '/login') window.loading_screen.finish();
    
  });
