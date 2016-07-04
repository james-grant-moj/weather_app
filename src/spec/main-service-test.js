(function(){
    'use strict';

    describe('main services', function () {

        var mainService, $httpBackend;

        beforeEach(module('weather_app', function($provide) {
          // Do some other stuff before each test run if you want...
          console.log('TEST');
        }));

        beforeEach(inject(function (_$httpBackend_, _mainService_) {
          $httpBackend = _$httpBackend_;
          mainService = _mainService_;
          console.log(mainService);
        }));

        it('mainService.getWeatherData() - test', function () {
            $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/forecast/city?id=2643743&APPID=7de4249db98ed0359a7f980213f9d1f8').respond('Hi!');
            mainService.getWeatherData().then(function(data) {
                expect(data).not.toBe(null);
                expect(data).not.toBe(undefined);
                expect(data).not.toBe('');
                expect(data).toBeDefined();
                console.log(data);
            });
            $httpBackend.flush();
        });

    });

})();