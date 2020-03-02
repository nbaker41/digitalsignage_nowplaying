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

		// Find customer and player.
		// Execute chained list of queries starting with customers...
		$get.customers(function(){
			findThisCustomer();
			home.app.data = $rootScope.data;
			// console.log(screen.app.data);
			console.log(home.app.data);
		});
		
	// thisCustomer
		function findThisCustomer(){
			// var allC = $rootScope.data.allCustomers;
		// cycle through all customers to see if one shortname matches the stateparams.customer...
			// for (var i = 0; i < allC.length; i++){
			// 	if (allC[i].name_short == $stateParams.customer){
			// 		$rootScope.data.thisCustomer = allC[i];
			// 	}
			// }
		// if no shortname exists that matches url, do something...
			// if ($rootScope.data.thisCustomer == undefined){
			// 	$state.go("home");
			// }
		// get player...
			$get.players({customer_id: null}, function(response){
				alert("hello");
				// console.log(response)
				// findThisPlayer();
				// console.log();
			});
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