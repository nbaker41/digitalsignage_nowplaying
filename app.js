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
          //main,
               //leftsection,
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
     "appCtrl", function($scope){
     let app = this;

     // gather info about this player based on url parameters...
          app.info = {
               client: {
                    id: 02938,
                    name: "Office of Undergraduate Admissions"
               },
               player: {
                    id: 2883,
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