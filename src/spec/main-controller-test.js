(function(){
    'use strict';

    describe('main controller', function () {

        beforeEach(module('weather_app', function($provide) {
          // Do some other stuff before each test run if you want...
          console.log('TEST');
        }));

        var $controller;

        beforeEach(inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        describe('main ctrl', function() {
            //controller tests go here
            it('controller is not equal to null', function() {
                var $scope = {},
                controller = $controller('main-controller', { $scope: $scope });
                expect(controller).not.toBe(null);
                expect(controller).not.toBe(undefined);
                expect(controller).not.toBe('');
                expect(controller).toBeDefined();
            });
        });
    });
})();