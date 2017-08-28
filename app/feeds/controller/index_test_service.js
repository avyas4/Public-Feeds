it('should demonstrate using when (200 status)', inject(function($http) {

    var $scope = {};

    $http.get('data/feeds.json')
        .success(function(data) {
            $scope.valid = true;
            $scope.records = data;
        })
        .error(function(error) {
            $scope.valid = false;
            console.log(error)
        });

    $httpBackend
        .when('GET', 'data/feeds.json')
        .respond(200, {});

    $httpBackend.flush();
    expect($scope.valid).toBe(true);

}));