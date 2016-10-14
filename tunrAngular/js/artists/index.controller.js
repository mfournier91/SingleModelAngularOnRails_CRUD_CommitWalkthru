angular.module('artists')
.controller("ArtistsIndexController", ArtistsIndexControllerCallback);

function ArtistsIndexControllerCallback(){
  this.name = "bob";
}
