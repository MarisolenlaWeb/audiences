/*IIFE*/
(function(){
    'use strict'
    
    var menu = {
        controller: menuCtrl,
        templateUrl: 'app/components/menu/menu.html' 
    };

    function menuCtrl(){
        var asController = this;
 
  };

    angular
      .module('audiences')
      .component('menu', menu); 
})();