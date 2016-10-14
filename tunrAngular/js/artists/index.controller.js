angular.module('artists')
.controller("ArtistsIndexController", ["ArtistFactory", ArtistsIndexControllerCallback]);

function ArtistsIndexControllerCallback(ArtistFactory){
  this.artists = ArtistFactory.query();
  console.log(this.artists);
}
