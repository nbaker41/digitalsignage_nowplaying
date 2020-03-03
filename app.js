(function () {

	let nowPlaying = angular.module("now-playing", [
		// Google modules
		"ui.router",
		"ngAnimate",
		// routes
		"home",
		"screen",
		"csvtest", // test
		// components
		"header",
		"ticker",
		"keyboard",
		//main
		"leftsection",
		"events",
		"playlists",
		"slideshow",
		"directory",
		// services
		"data_get",
		//wp,
		//web scraper,
		//weather,
		// directives
		"draggableModule"
	]);

	nowPlaying.config(function ($locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");
	});

	nowPlaying.run(function ($get, $rootScope, $stateParams, $state) {
		// alert("hey");
	});

	nowPlaying.controller(
	"appCtrl",
	function ($scope, $transitions, $get) {
	let app = this;

	// transitions
		$transitions.onSuccess({}, function ($transition) {
			app.route = {
				from: $transition.$from().name,
				to: $transition.$to().name,
				params: {
					customer: $transition.params().customer,
					player: $transition.params().player,
					// playlist: $transition.params().playlist,
				}
			};
			$get.clearRootScope();
			app.breakpoints(window.innerWidth);
		});

	// breakpoints
		app.breakpoints = function(w){
			app.view = {};
			if( w <= 600 ){
				app.view.size = "xs";
				app.view.type = "v";
			} else if( 600 <= w && w <= 1000 ){
				app.view.size = "sm";
				app.view.type = "v";
			} else if( 1000 <= w && w <= 1360 ){
				app.view.size = "md";
				app.view.type = "v";
			} else if( 1360 <= w && w <= 1900 ){
				app.view.size = "lg";
				app.view.type = "v";
			} else if( w >= 1900 ){
				app.view.size = "xl";
				app.view.type = "h";
			} else{
				app.view.size = undefined;
				app.view.type = undefined;
			}
			return app.view
		}
		window.addEventListener('resize', function () {
			app.breakpoints(window.innerWidth);
		}, false);

	// clock
		app.tick = setInterval(function () {
			app.currentTime = new Date();
			$scope.$apply();
		}, 1000);

	});

})();