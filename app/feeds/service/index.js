(function(angular) {
  'use strict';

// Declare app level module which depends on views, and services
angular.module('feedsService', [])
      /*  Create an instance of a service 
        Inject $http service 
        Fetch data from json files  
         */
    .service('getFeedsData', ['$http', function($http) {
        this.getData = function(cb, errCb) {

            $http.get('data/feeds.json').then(function(response) {

                cb(response.data);

            }, function(error) {

                errCb(error);

            })

        }
    }])
 })(window.angular);