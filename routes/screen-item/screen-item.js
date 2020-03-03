(function(){

	let screenItem = angular.module("screen-item", []);

	screenItem.config(function($stateProvider){
	$stateProvider.state(
	'screen-item', {
		url: '/:customer/:player/:playlist',
		templateUrl: 'routes/screen-item/screen-item.html',
		controller: "screenItemCtrl",
		controllerAs: "item"
	})});

	screenItem.controller("screenItemCtrl", function($scope, $state, $rootScope, $get, $stateParams){
	var item = this;
	item.app = $scope.$parent.app;

	// attach rootscope data to item.info after requests for customer and player.
		function setData(){
			item.info = {
				customer: $rootScope.data.thisCustomer.name_short,
				player: $rootScope.data.thisPlayer.player_id
			}
			console.log(item.info.player);
		}


	// Find customer and player.
	// Execute chained list of queries starting with customers...
		$get.customers(function(){
			findThisCustomer();
			item.app.data = $rootScope.data;
			// console.log(screen.app.data);
		});

		
		// what happens if you specify a customer but no player?
		// item.sample = "wassupwiddit";
		
		// get the customer and player 
		// item.info = {
		// 	customer: info.app.data.thisCustomer.name_short,
		// 	player: info.app.data.thisPlayer.player_id
		// };

		
		console.log(item);

	// thisCustomer
		function findThisCustomer(){
			var allC = $rootScope.data.allCustomers;
		// cycle through all customers to see if one shortname matches the stateparams.customer...
			for (var i = 0; i < allC.length; i++){
				if (allC[i].name_short == $stateParams.customer){
					$rootScope.data.thisCustomer = allC[i];
				}
			}
		// if no shortname exists that matches url, do something...
			if ($rootScope.data.thisCustomer == undefined){
				$state.go("home");
			}
		// get player...
			$get.players({customer_id: $rootScope.data.thisCustomer.customer_id}, function(){
				findThisPlayer();
			});
		}
		
	// thisPlayer
		function findThisPlayer(){
			var allP = $rootScope.data.allPlayers;
		// cycle through all players to see if one id matches stateparams.player...
			for (var i = 0; i < allP.length; i++){
				if (allP[i].player_id == $stateParams.player){
					$rootScope.data.thisPlayer = allP[i];
				}
			}
		// what happens if no match...
			if ($rootScope.data.thisPlayer == null){
				alert("player does not exist in customer " + $rootScope.data.thisCustomer.name_short);
				$state.go();
			}
		// get playlists...
			$get.playlists({player_id: $rootScope.data.thisPlayer.player_id}, function(){
				fillPlaylists();
			});
		}

	// fill playlists 
		function fillPlaylists(){
		// combine both of these for loops into one function
		// media
			var M = $rootScope.data.allPlaylists.mediaPlaylists;
			for (var i = 0; i < M.length; i++){
				let thisM = M[i];
				$get.playlistItems(
					{
						playlist_id: thisM.playlist_id,
						playlist_type: thisM.type,
					},
					function(response){
						for (var i = 0; i < response.length; i++){
							thisM.items.push(response[i])
						}
					}
				);
			}
		// directories
			var D = $rootScope.data.allPlaylists.directoryPlaylists;
			for (var i = 0; i < D.length; i++){
				let thisD = D[i];
				$get.playlistItems(
					{
						playlist_id: thisD.playlist_id,
						playlist_type: thisD.type,
					},
					function(response){
						for (var i = 0; i < response.length; i++){
							thisD.items.push(response[i])
						}
					}
				);
			}
			// console.log($rootScope.data.allPlaylists);
			setData();
		}


	});

})();