angular.module('artists')
  .controller("ArtistShowController", ["ArtistFactory", "$stateParams", "$state", ArtistShowControllerCallback]);

  function ArtistShowControllerCallback(ArtistFactory, $stateParams, $state){
    var vm = this;
    this.artist = ArtistFactory.get({id: $stateParams.id})
    this.update = function() {
      vm.artist.$update({id: $stateParams.id})
    }
  }
