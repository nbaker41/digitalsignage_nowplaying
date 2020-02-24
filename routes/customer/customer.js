(function(){

	let customer = angular.module(
	"customer", [
	]);

	customer.config(function($stateProvider){
	$stateProvider.state(
	'customer', {
		url: '/:customer/:player',
		templateUrl: 'routes/customer/customer.html',
		controller: "customerCtrl",
		controllerAs: "customer"
	})});

	customer.controller("customerCtrl", function($scope, $state, $rootScope, $data, $stateParams){
	var customer = this;
	customer.app = $scope.$parent.app;

	// what happens if you specify a customer but no player?
		if ($stateParams.player == undefined){
			alert("You are in " + $stateParams.customer + " but you have not specified a player.");
		}

	// Execute chained list of queries starting with customers...
		$data.getCustomers(function(){
			findThisCustomer();
		});

	// thisCustomer
		function findThisCustomer(){
			var allC = $rootScope.data.allCustomers;
		// cycle through all customers to see if one shortname matches the stateparams.customer...
			for (var i = 0; i < allC.length; i++){
				if (allC[i].name_short == $stateParams.customer){
					$rootScope.data.thisCustomer = allC[i];
					customer.app.currentCustomer = allC[i];
				}
			}
		// if no shortname exists that matches url, do something...
			if ($rootScope.data.thisCustomer == undefined){
				$state.go("home");
			}
			$data.getPlayers({customer_id: 3}, function(){
				alert("customer_id");
				findThisPlayer();
			});
		}

	// thisPlayer
		function findThisPlayer(){
			var allP = $rootScope.data.allPlayers;
			console.log($rootScope.data.allPlayers);
		// cycle through all customers to see if one shortname matches the stateparams.customer...
			for (var i = 0; i < allP.length; i++){
				if (allP[i].player_id == $stateParams.player){
					$rootScope.data.thisPlayer = allP[i];
					customer.app.currentPlayer = allP[i];
				}
			}
		// what happens if no player matches the extension...
			if ($rootScope.data.thisPlayer == null){
				alert("player does not exist in customer " + $rootScope.data.thisCustomer.name_short);
			}
		}

	});

})();