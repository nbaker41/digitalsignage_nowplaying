(function(){

     let playlists = angular.module("playlists", [
     ]);

	playlists.component("playlists", {
		controller: "playlistsCtrl",
		controllerAs: "playlists",
		templateUrl: "components/main/playlists/playlists.html"
	});

     playlists.controller(
     "playlistsCtrl", function($scope, $rootScope){
     this.app = $scope.$parent.app;
     let playlists = this;

          playlists.stuff = "hello pl";
          console.log(playlists.stuff);

          
     });

})();