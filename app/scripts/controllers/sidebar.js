'use strict';

/**
 * @ngdoc function
 * @name asknsolveApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the asknsolveApp
 */
angular.module('asknsolveApp')
  .controller('SidebarCtrl', function ($scope) {
    
    // include javascript for sidebar directly from sb-admin-2
    $.getScript('bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js');
    
    // send ready event
    $scope.$emit('readySidebar');
    
  });
