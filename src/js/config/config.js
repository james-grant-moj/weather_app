(function(){
    'use strict';
    angular.module('weather_app').config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: './templates/main.html',
                controller: 'main-controller',
                controllerAs: 'mainCtrl'
            })
    })
})();