(function(){

     let app = angular.module("app", [
     // modules
          "ui.router",
     //routes
     //components
          "header",
          //ticker,
          //main,
               //leftsection,
               "slideshow",
               //list,
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

          app.example = "Hello from AJS";

     // handle the clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);
     });

})();