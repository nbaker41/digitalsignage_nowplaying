(function () {

	let playlists = angular.module("playlists", []);

	playlists.component("playlists", {
		controller: "playlistsCtrl",
		controllerAs: "playlists",
		templateUrl: "components/main/playlists/playlists.html"
	});

	playlists.controller(
	"playlistsCtrl",
	function ($scope, $rootScope) {
		this.app = $scope.$parent.app;
		let playlists = this;

		playlists.app.data = $rootScope.data;
		console.log(playlists.app.data);

	// ng-switch on  #playlists-container
		playlists.current = "media";

	// switch  playlists
		playlists.switchPlaylists = function(){
			if(playlists.current == "media"){
				playlists.current = "directory";
			} else{
				playlists.current = "media";
			}
		}

	});

})();