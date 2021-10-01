//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', ($scope, $location, cityService)=>{
    $scope.city = cityService.city
    $scope.$watch('city', function() {
        cityService.city = $scope.city
    })

    $scope.submit = function() {
        $location.path('/forecast')
    }
}])

weatherApp.controller('forecastController', ['$scope', '$resource', '$http', '$routeParams', 'cityService', ($scope, $resource, $http, $routeParams, cityService)=>{
    $scope.city = cityService.city
    $scope.qtd = $routeParams.qtd || '2'
    $scope.apiUrl = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=' + $scope.qtd
    // $scope.api = $resource('https://v2.jokeapi.dev/joke/Any?type=single&amount=2', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}})
    // $scope.apiResult = $scope.api.get()
    // console.log($scope.apiResult);

    $http.get($scope.apiUrl)
        .success(function(result) {
            //$log.log(result)
            $scope.apiResult = result
            console.log($scope.apiResult);
        })
        .error(function(data, status) {
            $log.error(data)
            $log.error(status)
        })
}])