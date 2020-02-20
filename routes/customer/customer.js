(function(){

	let customer = angular.module(
	"customer", [
	]);

	customer.config(function($stateProvider){
	$stateProvider.state(
	'customer', {
		url: '/:customer/:screen',
		templateUrl: 'routes/customer/customer.html',
		controller: "customerCtrl",
		controllerAs: "customer"
	})});

	customer.controller("customerCtrl", function($scope, $http, $rootScope, $transitions){
	var customer = this;
	customer.app = $scope.$parent.app;


		console.log(customer.app.route);

		if (customer.app.route == undefined){
			alert("this is arch")
		}

	// pull all customers
		var request = $http({
			method: 'GET',
			url: '../../get_customers.php',
		});
		request.then(function(response){
			if(response.data[0] == "<"){
				customer.app.errormessage = $sce.trustAsHtml(response.data);
			}else{
				$rootScope.data.allCustomers = response.data;
				findThisCustomer();
				customer.app.data = $rootScope.data;
			}
		}, function(error){
			customer.app.errormessage = $sce.trustAsHtml(error.data);
		});
	// find the customer based on the url params and data.allcustomers...
		function findThisCustomer(){
			var allC = $rootScope.data.allCustomers;
			for (var i = 0; i < allC.length; i++){
				if (allC[i].name_short == customer.app.route.params.customer){
					console.log(allC[i]);
					$rootScope.data.thisCustomer = allC[i];
					customer.currentCustomer = allC[i];
				}
			}
		}


	});

})();