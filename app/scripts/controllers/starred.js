'use strict';

/**
 * @ngdoc function
 * @name asknsolveApp.controller:StarredCtrl
 * @description
 * # StarredCtrl
 * Controller of the asknsolveApp
 */
angular.module('asknsolveApp')
  .controller('StarredCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
