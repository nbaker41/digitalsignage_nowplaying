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

	customer.controller("customerCtrl", function($scope, $stateParams){
	var customer = this;
	customer.app = $scope.$parent.app;

		alert("hello");
		console.log($stateParams);

	});

})();