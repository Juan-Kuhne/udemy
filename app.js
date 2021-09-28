// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$filter', function ($scope, $log, $filter) {

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
}]);



