'use strict';

/**
 * @ngdoc overview
 * @name asknsolveApp
 * @description
 * # asknsolveApp
 *
 * Main module of the application.
 */
angular
  .module('asknsolveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dash.html',
        controller: 'DashCtrl'
      })
      .when('/dash', {
        templateUrl: 'views/dash.html',
        controller: 'DashCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
      })
      .when('/starred', {
        templateUrl: 'views/starred.html',
        controller: 'StarredCtrl'
      })
      .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl'
      })
      .when('/progress', {
        templateUrl: 'views/progress.html',
        controller: 'ProgressCtrl'
      })
      .when('/finished', {
        templateUrl: 'views/finished.html',
        controller: 'FinishedCtrl'
      })
      .when('/quarantine', {
        templateUrl: 'views/quarantine.html',
        controller: 'QuarantineCtrl'
      })
      .when('/statistics', {
        templateUrl: 'views/statistics.html',
        controller: 'StatisticsCtrl'
      })
      .when('/top', {
        templateUrl: 'views/top.html',
        controller: 'TopCtrl'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryCtrl'
      })
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl'
      })
      .when('/all', {
        templateUrl: 'views/all.html',
        controller: 'AllCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
