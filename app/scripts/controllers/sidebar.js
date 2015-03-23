'use strict';

/**
 * @ngdoc function
 * @name asknsolveApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the asknsolveApp
 */
angular.module('asknsolveApp')
  .controller('SidebarCtrl', function ($scope, $location) {
    
    // include javascript for sidebar directly from sb-admin-2
    $.getScript('bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js');

    // highlight current view menu item
    $scope.highlightClass = function(path) {
        if ($location.$$path === path)
            return "current";
        else
            return "";
    }
    
    // send ready event
    $scope.$emit('readySidebar');
    
  });
