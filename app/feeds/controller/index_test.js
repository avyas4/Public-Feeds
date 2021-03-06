describe('feedsController', function() {
    beforeEach(angular.mock.module('myApp'));

    var $controller;
    beforeEach(angular.mock.inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('feedsController', function() {
        it('it should give value of feeds', function() {
            var $scope = {};
            var controller = $controller('feedsController', {
                $scope: $scope
            });
            expect(controller).toBeDefined();
        });
    });
});