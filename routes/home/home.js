(function(){

	let home = angular.module(
	"home", [
	]);

	home.config(function($stateProvider){
	$stateProvider.state(
	'home', {
		url: '/',
		controller: "homeCtrl",
		controllerAs: "home",
		templateUrl: "routes/home/home.html"
	})});	

	home.controller("homeCtrl", function($scope, $rootScope, $get){
	var home = this;
	home.app = $scope.$parent.app

	// Find all customers... 
	// Execute chained list of queries starting with customers...
		$get.customers(function(){
			getAllPlayers();
			home.app.data = $rootScope.data;
		});
		
	// get all customers...
		function getAllPlayers(){
		// get all players...
			$get.players({customer_id: "null"}, function(){
				var allC = $rootScope.data.allCustomers;
				var allP = $rootScope.data.allPlayers;
				for (var i = 0; i < allC.length; i++){
					allC[i].players = [];
					let cid = allC[i].customer_id;
					for (var j = 0; j < allP.length; j++){
					// attach empty playlist fields to each player obj...
						allP[j].playlists = {
							media: [],
							directories: []
						}
					// match players to customers
						var pid = allP[j].customer_id;
						if (pid == cid){
							allC[i].players.push(allP[j]);
						}
					}
				}
			});
			$get.playlists({player_id: "null"}, function(){
			// grab all players...
				var allP = $rootScope.data.allPlayers;
			// add media and dir playlists into one array.
				var M = $rootScope.data.allPlaylists.mediaPlaylists;
				var D = $rootScope.data.allPlaylists.directoryPlaylists;
				var allPl = M.concat(D);
			// match playlists to players...
				for (var i = 0; i < allP.length; i++){
					var id = allP[i].player_id;
					for(var j = 0; j < allPl.length; j++){
						var plid = allPl[j].player_id;
						if (plid == id){
							if (allPl[j].type == "media"){
								allP[i].playlists.media.push(allPl[j]);
							} else {
								allP[i].playlists.directories.push(allPl[j]);
							}
						}
					}
				// count the number of each type of playlist
					allP[i].playlists.lengths = {
						media: allP[i].playlists.media.length,
						directories: allP[i].playlists.directories.length,
					}
				}
			})
		}
		
	// // thisPlayer
	// 	function findThisPlayer(){
	// 		var allP = $rootScope.data.allPlayers;
	// 	// cycle through all players to see if one id matches stateparams.player...
	// 		for (var i = 0; i < allP.length; i++){
	// 			if (allP[i].player_id == $stateParams.player){
	// 				$rootScope.data.thisPlayer = allP[i];
	// 			}
	// 		}
	// 	// what happens if no match...
	// 		if ($rootScope.data.thisPlayer == null){
	// 			alert("player does not exist in customer " + $rootScope.data.thisCustomer.name_short);
	// 			$state.go();
	// 		}
	// 	// get playlists...
	// 		$get.playlists({player_id: $rootScope.data.thisPlayer.player_id}, function(){
	// 			fillPlaylists();
	// 		});
	// 	}

	// // fill playlists 
	// 	function fillPlaylists(){
	// 	// combine both of these for loops into one function
	// 	// media
	// 		var M = $rootScope.data.allPlaylists.mediaPlaylists;
	// 		for (var i = 0; i < M.length; i++){
	// 			let thisM = M[i];
	// 			$get.playlistItems(
	// 				{
	// 					playlist_id: thisM.playlist_id,
	// 					playlist_type: thisM.type,
	// 				},
	// 				function(response){
	// 					for (var i = 0; i < response.length; i++){
	// 						thisM.items.push(response[i])
	// 					}
	// 				}
	// 			);
	// 		}
	// 	// directories
	// 		var D = $rootScope.data.allPlaylists.directoryPlaylists;
	// 		for (var i = 0; i < D.length; i++){
	// 			let thisD = D[i];
	// 			$get.playlistItems(
	// 				{
	// 					playlist_id: thisD.playlist_id,
	// 					playlist_type: thisD.type,
	// 				},
	// 				function(response){
	// 					for (var i = 0; i < response.length; i++){
	// 						thisD.items.push(response[i])
	// 					}
	// 				}
	// 			);
	// 		}
	// 		// console.log($rootScope.data.allPlaylists);
	// 	}



	});

})();