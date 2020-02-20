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

     app.run(function(){
     });

     app.controller(
     "appCtrl", function($scope, $transitions, $http, $sce, $rootScope){
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
               // console.log(app.rosute);
          });

     // handle the clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);




// ----------  DATA  ------------------------------------------------------------------------------------------------------------------

     // construct app.data -- put this on rootscope?
          $rootScope.data = {
               allCustomers: [],
               thisCustomer: {
                    schools: [
                    ],
                    departments: [
                    ]
               },
               thisPlayer: {
                    playlists:[
                    ],
                    thisBuilding: {
                    }
               }
          };          


     // make app.data == $rootScope.data...
          // app.siteData = JSON.stringify(siteData, null, 4);
          app.data = JSON.stringify(app.data, null, 4);




     // need to see if sql's datetime format is the same as this
          // app.dateTimeExample = "2020-02-11T13:57:01.395Z";

     });

})();