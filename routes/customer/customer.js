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

	// find the customer based on the url params and data.allcustomers...
		$data.getCustomers(function(x){
			findThisCustomer();
		});
		function findThisCustomer(){
			var allC = $rootScope.data.allCustomers;
		// cycle through all customers to see if one shortname matches the stateparams.customer...
			for (var i = 0; i < allC.length; i++){
				if (allC[i].name_short == $stateParams.customer){
					$rootScope.data.thisCustomer = allC[i];
					customer.app.currentCustomer = allC[i];
				}
			}
			$data.getPlayers(function(){
				findAllPlayers();
			});
			console.log($rootScope.data.thisCustomer);
		// if no shortname exists that matches url, do something...
			if ($rootScope.data.thisCustomer == undefined){
				$state.go("home");
			}
		}
	// find all players
		function findAllPlayers(){
			console.log($rootScope);
			alert("hello");
		}

	});

})();