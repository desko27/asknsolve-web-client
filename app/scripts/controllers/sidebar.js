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
    
    // menu items
    $scope.items = [
        { name: 'Personal', icon: 'user', path: '#',
            children: [
            
            { name: 'Dashboard', icon: 'dashboard', path: '/' },
            { name: 'Nuevo ticket', icon: 'plus', path: '/new' },
            { name: 'Todos mis tickets', icon: 'ticket', path: '/all', color: 'purple', tag: 'Nuevo', tag_style: 'success' },
            { name: 'Destacados', icon: 'star', path: '/starred', color: 'red' },
            
        ] },
        { name: 'Equipo de soporte', icon: 'life-ring', path: '#',
            children: [
        
            { name: 'Bandeja de entrada', icon: 'inbox', path: '/inbox', color: 'purple', news: 12 },
            { name: 'En proceso', icon: 'cogs', path: '/progress', color: 'purple', news: 4 },
            { name: 'Finalizado', icon: 'check-square-o', path: '/finished', color: 'green' },
            { name: 'Cuarentena', icon: 'thumbs-o-down', path: '/quarantine', color: 'orange' },
            { name: 'Estadística', icon: 'bar-chart', path: '/statistics', color: 'aqua' },
            
        ] },
        { name: 'Miembros de Sistemas', icon: 'list-alt', path: '#',
            children: [
        
            { name: 'Ismael Ramón', icon: 'male', path: '#', color: 'gray', tag: 'Staff', tag_style: 'warning' },
            { name: 'Paqui Pardo', icon: 'male', path: '#', color: 'gray', tag: 'Staff', tag_style: 'warning' },
            { name: 'Daniel Durán', icon: 'male', path: '#', color: 'gray', tag: 'Staff', tag_style: 'warning' },
            
        ] },
        // { name: 'Inventario', icon: 'database', path: '/inventory' },
        { name: 'Top Usuarios', icon: 'trophy', path: '/top' },
        { name: 'Configuración', icon: 'cog', path: '/config', color: 'gray' },
    ];

    // default color class
    $scope.defaultColorClass = function(color) {
        if (color === '') return 'blue';
        else return color;
    };
    
    // highlight current view menu item
    $scope.highlightClass = function(path) {
        if ($location.$$path === path) return 'current';
        else return '';
    };
    
    // send ready event
    $scope.$emit('readySidebar');
    
  });
