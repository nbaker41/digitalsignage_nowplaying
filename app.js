(function(){

     let app = angular.module("app", [
     // modules
          "ui.router",
          "ngAnimate",
     //routes
     //components
          "header",
          "ticker",
          "keyboard",
          //main
               "leftsection",
               "slideshow",
               "list",
               "events"
     //services
          //wp,
          //web scraper,
          //weather,
     ]);

	app.config(function($locationProvider, $urlRouterProvider){
          $locationProvider.html5Mode(true);
          $urlRouterProvider.otherwise("/");
     });

     app.controller(
     "appCtrl", function($scope, $transitions){
     let app = this;

     
	// transitions
          $transitions.onSuccess({}, function($transition){
               app.state = {};
               app.state.from = $transition.$from().name;
               app.state.to = $transition.$to().name;
               app.state.params = $transition.params().name;
          });
          
     // gather info about this player based on url parameters...
          app.info = {
               client: {
                    id: 02938,
                    name: {
                         short: "admissions",
                         official: "Office of Undergraduate Admissions"
                    }
               },
               player: {
                    id: 2883,
                    floor: 3,
                    name: "First Floor - Front Desk",
                    sections: {
                         leftsection: false,
                         slideshow: false,
                         list: true,
                         events: true
                    }
               }
          };

     // handle the clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);
     });

})();