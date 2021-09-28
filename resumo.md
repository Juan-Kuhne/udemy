## Diretrizes
* ng-app
* ng-controller
* ng-if
  * Exibe a tag enquanto a expressão for verdadeira, quando falsa exclui a tag e recria-a quando voltar a ser true
  * `<div ng-if="variable.length !== 5"></div>`
* ng-show
  * Exibe a tag enquanto a expressão for verdadeira, quando falsa esconde a tag sem excluí-la adicionando a diretriz `ng-hide` de atributo
  * `<div ng-show="variable.length !== 5"></div>`
* ng-hide
  * Esconde a tag enquanto a expressão for vardadeira, caso não informada o padrão é true
  * `<div ng-hide="variable.length !== 5"></div>`
* ng-class
  * Adiciona uma classe quando a condição retorna true
  * `<div ng-class="{'alert-warning':variable<5, 'alert-danger':variable>5}"></div>`
* ng-repeat
  * Repete a tag usando uma estrutura 'for/in' em uma lista 
  * `<div ng-repeat="item in items"> {{ item }} </div>`

## Serviços
* $scope
* $log
* $filter
  * `$filter('lowercase')($scope.variable)`