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

	customer.controller("customerCtrl", function($scope, $http, $rootScope, $data){
	var customer = this;
	customer.app = $scope.$parent.app;

	// find the customer based on the url params and data.allcustomers...
		$data.getCustomers(function(x){
			findThisCustomer();
		});
		function findThisCustomer(){
			var allC = $rootScope.data.allCustomers;
			for (var i = 0; i < allC.length; i++){
				if (allC[i].name_short == customer.app.route.params.customer){
					$rootScope.data.thisCustomer = allC[i];
					customer.app.currentCustomer = allC[i];
				}
			}
		}

	});

})();