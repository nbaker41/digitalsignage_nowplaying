(function () {

	let nowPlaying = angular.module("now-playing", [
		// Google modules
		"ui.router",
		"ngAnimate",
		// routes
		"home",
		"screen",
		"screen-item",
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

	nowPlaying.controller(
	"appCtrl",
	function ($scope, $transitions, $get, $state) {
	let app = this;

	// transitions
		$transitions.onSuccess({}, function ($transition) {
			app.route = {
				from: $transition.$from().name,
				to: $transition.$to().name,
				params: {
					customer: $transition.params().customer,
					player: $transition.params().player,
					playlist: $transition.params().playlist,
				}
			};
			console.log(app.route);
			$get.clearRootScope();
			app.breakpoints(window.innerWidth);
		});

	// go to a screen
		app.goToScreen = function(x, y){
			// console.log(x, y);
			if (app.view.device == "mobile" || app.view.device == "tablet"){
				console.log("screen-item");
				$state.go("screen-item", {
					customer: x.name_short,
					player: y.player_id,
					playlist: "all"
				});
			} else{
				console.log("screen");
				$state.go("screen", {
					customer: x.name_short,
					player: y.player_id
				});
			}
		}

	// breakpoints
		app.breakpoints = function(w){
			app.view = {};
			if( w <= 600 ){
				app.view.size = "xs";
				app.view.type = "v";
				app.view.device = "mobile";
			} else if( 600 <= w && w <= 1000 ){
				app.view.size = "sm";
				app.view.type = "v";
				app.view.device = "tablet";
			} else if( 1000 <= w && w <= 1360 ){
				app.view.size = "md";
				app.view.type = "v";
				app.view.device = "laptop"
			} else if( 1360 <= w && w <= 1900 ){
				app.view.size = "lg";
				app.view.type = "v";
				app.view.device = "laptop";
			} else if( w >= 1900 ){
				app.view.size = "xl";
				app.view.type = "h";
				app.view.device = "desktop";
			} else{
				app.view.size = undefined;
				app.view.type = undefined;
				app.view.device = undefined;
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