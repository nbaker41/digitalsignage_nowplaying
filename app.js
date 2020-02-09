(function(){

     let app = angular.module("app", [
     // modules
          "ui.router",
          "ngAnimate",
     //routes
          "home",
          "customer",
     //components
          "header",
          "ticker",
          "keyboard",
          //main
               "leftsection",
               "slideshow",
               "list",
               "events",
     //services
          //wp,
          //web scraper,
          //weather,
     //directives
          "draggableModule"
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
          // construct a route object
			app.route = {
                    from: $transition.$from().name,
                    to: $transition.$to().name,
                    params: {
                         customer: $transition.params().customer,
                         screen: $transition.params().screen,
                    }
               };
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
                         slideshow: true,
                         list: false,
                         events: true
                    }
               }
          };          

          app.siteData = JSON.stringify(siteData, null, 4);

     // handle the clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);
     });

})();