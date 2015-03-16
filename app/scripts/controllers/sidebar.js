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
    
    // set user exp here ('#exp' is only available when sidebar.html loads)
    // another option would be emitting an event for GlobalCtrl controller
    global.exp = new Mprogress({minimum: 0, parent: '#exp'}).set($scope.user.exp);
    
  });
