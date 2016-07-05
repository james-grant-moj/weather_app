(function(){
    'use strict';
    angular.module('weather_app',['ngRoute'])
})();
(function(){
    'use strict';
    angular.element(document).ready(function(){
        angular.bootstrap(document,['weather_app'])
    })
})();
(function(){
    'use strict';
    angular.module('weather_app').config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: '../templates/main.html',
                controller: 'main-controller',
                controllerAs: 'mainCtrl'
            })
    })
})();
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
(function(){
    'use strict';
    angular.module('weather_app')
        .factory('mainService',['$q','$http',function($q,$http){
            var service = {};
            service.getWeatherData = getWeatherData;
            return service;
            function getWeatherData() {
                var deferred = $q.defer();
                $http({
                    method: 'Get',
                    url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=2643743&APPID=7de4249db98ed0359a7f980213f9d1f8'
                }).then(function success(res){
                    return deferred.resolve(res);
                },function error(res){
                    return deferred.reject(res);
                })
                return deferred.promise;
            }
        }]);
})();