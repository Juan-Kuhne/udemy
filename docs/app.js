// MODULE
var angularApp = angular.module('angularApp', ['ngRoute'])

angularApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
})

angularApp.service('nameService', function() {
    var self = this
    this.name = 'John Doe'

    this.namelength = ()=>{
        return self.name.length
    }
})

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$filter','$http', '$location', 'nameService', function ($scope, $log, $filter, $http, $location, nameService) {

    $scope.name = nameService.name
    $scope.$watch('name', function() {
        nameService.name = $scope.name
    })

    $scope.handle = ''
    $scope.upperhandle = function() {
        return $filter('lowercase')($scope.handle)
    }

    $scope.characters = 5

    $scope.rules = [
        {'rulename': 'Must be 5 characters'},
        {'rulename': 'Must not be used elsewhere'},
        {'rulename': 'Must be cool'}
    ]

    $scope.alertClick = () => {
        $log.info('Clicked!')
    }

    $http.get('https://www.boredapi.com/api/activity')
        .success(function(result) {
            //$log.log(result)
            $scope.activity = result
        })
        .error(function(data, status) {
            $log.error(data)
            $log.error(status)
        })
    
    $log.log(nameService.name)
    $log.log(nameService.namelength())
}])

angularApp.controller('secondController', ['$scope', '$routeParams', 'nameService', function ($scope, $routeParams, nameService) {
    $scope.name = nameService.name
    $scope.$watch('name', function() {
        nameService.name = $scope.name
    })

    $scope.num = $routeParams.num || 1
}])
