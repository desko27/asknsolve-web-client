'use strict';

/**
 * @ngdoc function
 * @name asknsolveApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the asknsolveApp
 */
angular.module('asknsolveApp')
  .controller('LoginCtrl', function ($scope, $http, $routeParams, $window) {
    
    // no bars
    $scope.$parent.bars = false;
    
    // get code from google
    // console.log($routeParams);
    
    // get google auth redirection
    $http.post('http://localhost:8000/login/', {'redirect_uri': 'http://127.0.0.1:9000/'})
      .success(function(data) {
        $window.location.href = data.url;
    });
    
  });
