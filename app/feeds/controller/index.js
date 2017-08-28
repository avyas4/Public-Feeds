(function(angular) {
    'use strict';
    // Declare app level module which depends on views, and services
    angular.module('myApp', ['feedsService'])
        .controller("feedsController", ['$scope', 'getFeedsData', '$q', function($scope, getFeedsData, $q) {
            $scope.layout = 'grid';

            /*  getFeedsData is an instance of a service 
                This function will get data from services  
             */

            var deferred = $q.defer();
            getFeedsData.getData(function(response) {
                $scope.records = response.feed.entry;
            }, function(error) {
                console.log(error);
            });

        }])
})(window.angular);