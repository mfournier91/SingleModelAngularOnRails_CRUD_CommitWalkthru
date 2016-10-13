angular.module("tunr", [
  "ui.router"
])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
      .state('artistIndex', {
        url: '/artists',
        templateUrl: 'js/artists/index.html'
      })
  }
