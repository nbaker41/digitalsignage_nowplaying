(function(){

	let screen = angular.module("screen", []);

	screen.config(function($stateProvider){
	$stateProvider.state(
	'screen', {
		url: '/:customer/:player',
		templateUrl: 'routes/screen/screen.html',
		controller: "screenCtrl",
		controllerAs: "screen"
	})});

	screen.controller("screenCtrl", function($scope, $state, $rootScope, $get, $stateParams){
	var screen = this;
	screen.app = $scope.$parent.app;

	// what happens if you specify a customer but no player?
		if ($stateParams.player == undefined){
			alert("You are in " + $stateParams.customer + " but you have not specified a player.");
		}

	// Find customer and player.
	// Execute chained list of queries starting with customers...
		$get.customers(function(){
			findThisCustomer();
			screen.app.data = $rootScope.data;
			console.log(screen.app.data);
		});
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
		// search for the players by customer...
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
		}

	});

})();