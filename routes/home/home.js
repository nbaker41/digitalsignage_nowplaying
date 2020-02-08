(function(){

	let home = angular.module(
	"home", [
	]);

	home.config(function($stateProvider){
	$stateProvider.state(
	'home', {
		url: '/',
		controllerAs: "home"
	})});	

})();