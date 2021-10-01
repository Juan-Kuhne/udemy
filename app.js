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

    $scope.people = [
        {
            name: 'John Doe',
            address: '555 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Jane Doe',
            address: '333 Second St.',
            city: 'Buffalo',
            state: 'NY',
            zip: '22222'
        },
        {
            name: 'James Doe',
            address: '111 Third St.',
            city: 'Miami',
            state: 'FL',
            zip: '33333'
        }
    ]

    $scope.formattedAddress = (person) => {
        return person.address+', '+ person.city+', '+ person.state+', '+ person.zip
    }
}])

angularApp.controller('secondController', ['$scope', '$routeParams', 'nameService', function ($scope, $routeParams, nameService) {
    $scope.name = nameService.name
    $scope.$watch('name', function() {
        nameService.name = $scope.name
    })

    $scope.num = $routeParams.num || 1
}])

angularApp.directive('searchResult', function() {
    return {
        restrict: 'EACM', //restringe o uso da diretriz para chamadas de elementos(E), atributos(A), classes(C) e comentários (M) *opcional, omitir um dos parametros o restringe. Por padrão permite todos*
        templateUrl: 'directives/searchresult.html',
        replace: true, //substitui o elemento que referencia a diretriz
        scope: { //isola o escopo da diretriz do escopo do controller
            personName: '@', //@ para strings
            personAddress: '@',
            personObject: '=', //= para objetos
            formattedAddressFunction: '&' // & para funções
        },
        transclude: true
    }
})
