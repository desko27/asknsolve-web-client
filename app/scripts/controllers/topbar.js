'use strict';

/**
 * @ngdoc function
 * @name asknsolveApp.controller:TopbarCtrl
 * @description
 * # TopbarCtrl
 * Controller of the asknsolveApp
 */
angular.module('asknsolveApp')
  .controller('TopbarCtrl', function ($scope) {
  
    // ---------------------------------------------------------------------------
    // global config
    // ---------------------------------------------------------------------------
    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
        theme: 'flat'
    };
    
    // ---------------------------------------------------------------------------
    // functions
    // ---------------------------------------------------------------------------
    function makeid() {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    
    // ---------------------------------------------------------------------------
    // test examples
    // ---------------------------------------------------------------------------
    $scope.testEXP = function() {
        
        $scope.user.exp_bar.inc(0.15);
    };
    
    $scope.testNotificationInternal = function() {
        
        new Messenger().post({
            message: '<span class="label label-warning">+123 EXP</span> <span>Ticket resuelto (' + makeid() + ')</span>',
            type: 'success'
        });
    };
    
    $scope.testNotificationBrowser = function() {
        
        if (!Notification) {
            swal('Navegador incompatible', 'Utiliza un navegador moderno para el sistema de notificaciones.', 'error');
            return;
        }
        
        if (Notification.permission !== 'granted')
            Notification.requestPermission();
        
        var notification = new Notification('Comentario de usuario', {
            icon: 'images/logo/sm.png',
            body: 'No sé por qué pero me sigue pasando, no hay manera de...',
        });
        
        notification.onclick = function () {
            //window.open("http://google.com/");
            swal('You clicked the browser notification!');
        };
    };
        
    $scope.testDialog = function() {
        
        swal('Muy mal :(', 'Esto no debería ocurrir... ¿o sí?', 'error');
    };
    
    // send ready event
    $scope.$emit('readyTopbar');
    
  });
