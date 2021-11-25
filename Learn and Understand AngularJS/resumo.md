**Documentação**: [AngularJS API rEFERENCE](https://docs.angularjs.org/api)

## Diretrizes
* ng-app
  * designates the root element of the application and is typically placed near the root element of the page - e.g. on the `<body>` or `<html>` tags
* ng-controller
  * attaches a controller class to the view
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
* ng-click
  * Realiza a função do atributo HTML `onclick`, vinculando o escopo do *controller*
* ng-cloak
  * Esconde a tag até o tratamento JS ser feito
  * Ex.: Usado para esconder as linhas de interpolação até que o Angular as substitua
* ng-view

## Serviços
* $scope
* $log
  * Realiza o output no console
  * `$log.log('something')`
  * `$log.info('something')`
  * `$log.warn('something')`
  * `$log.error('something')`
  * `$log.debug('something')`
* $filter
  * `$filter('lowercase')($scope.variable)`
* $location
  * `location.path()` => Exibe o hash(#) da url