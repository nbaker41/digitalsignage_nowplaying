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
     "appCtrl", function($scope, $transitions, $stateParams){
     let app = this;

     // transitions
          app.wrongdirectory = false;
		$transitions.onSuccess({}, function($transition){
			app.route = {};
			app.route.from = $transition.$from().name;
			app.route.to = $transition.$to().name;
			app.route.params = $transition.params().name;
			app.pageClass = app.route.to;
               console.log(app.route);
               if(app.route.params == undefined){
                    app.function();
               }else{
                    // do something
               };
               console.log(app.wrongdirectory);
          });
          app.function = function(){
               app.wrongdirectory = true;
          }

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

     // handle the clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);
     });

})();