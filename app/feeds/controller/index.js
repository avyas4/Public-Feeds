(function(angular) {
    'use strict';
    // Declare app level module which depends on views, and services
    angular.module('myApp', ['feedsService'])
        .controller("feedsController", ['$scope', 'getFeedsData', function($scope, getFeedsData) {
            $scope.layout = 'grid';

            /*  getFeedsData is an instance of a service 
                This function will get data from services  
             */

            getFeedsData.getData(function(response) {
                $scope.records = response.feed.entry;
            }, function(error) {
                console.log(error);
            });

        }])
})(window.angular);