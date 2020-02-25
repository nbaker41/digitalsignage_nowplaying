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

	home.controller("homeCtrl", function($scope, $rootScope){
	var home = this;
	home.app = $scope.$parent.app


	});

})();