(function(){
    'use strict';
    angular.module('weather_app')
        .controller('main-controller',['mainService',function(mainService){
            var vm = this;
            vm.getWeatherData = getWeatherData;
            getWeatherData();
            function getWeatherData(){
                mainService.getWeatherData().then(function success(res){
                    vm.weatherData = res.data;
                },function error(res){
                    vm.weatherData = 'Could not get data!'
                })
            }
        }])
})();