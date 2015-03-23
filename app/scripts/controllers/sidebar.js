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
        { name: 'Dashboard',            icon: 'dashboard',      path: '/' },
        { name: 'Nuevo ticket',         icon: 'plus',           path: '/new' },
        { name: 'Todos mis tickets',          icon: 'ticket',         path: '/all',       tag: 'Nuevo',     tag_style: 'success' },
        { name: 'Destacados',           icon: 'star',           path: '/starred' },
        { name: 'Equipo de soporte',    icon: 'life-ring',      path: '#',
            children: [
        
            { name: 'Bandeja de entrada',   icon: 'inbox',          path: '/inbox',         news: 12 },
            { name: 'En proceso',           icon: 'cogs',           path: '/progress',      news: 4 },
            { name: 'Finalizado',           icon: 'check-square-o', path: '/finished' },
            { name: 'Cuarentena',           icon: 'thumbs-o-down',  path: '/quarantine' },
            { name: 'Estadística',          icon: 'bar-chart',      path: '/statistics' },
            
        ] },
        { name: 'Miembros de Sistemas', icon: 'list-alt',       path: '#',
            children: [
        
            { name: 'Ismael Ramón',         icon: 'user',           path: '#',      tag: 'Staff',     tag_style: 'warning' },
            { name: 'Paqui Pardo',          icon: 'user',           path: '#',      tag: 'Staff',     tag_style: 'warning' },
            { name: 'Daniel Durán',         icon: 'user',           path: '#',      tag: 'Staff',     tag_style: 'warning' },
            
        ] },
        { name: 'Top Usuarios',         icon: 'trophy',         path: '/top' },
        { name: 'Inventario',           icon: 'database',       path: '/inventory' },
        { name: 'Configuración',        icon: 'cog',            path: '/config' },
    ];

    // highlight current view menu item
    $scope.highlightClass = function(path) {
        if ($location.$$path === path)
            return 'current';
        else
            return '';
    };
    
    // send ready event
    $scope.$emit('readySidebar');
    
  });
