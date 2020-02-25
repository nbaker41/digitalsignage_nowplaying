(function(){

     let nowPlaying = angular.module("now-playing", [
     // Google modules
          "ui.router",
          "ngAnimate",
     // routes
          "home",
          "screen",
     // components
          "header",
          "ticker",
          "keyboard",
          //main
               "leftsection",
               "slideshow",
               "directory",
               "events",
     // services
          "data_get",
          //wp,
          //web scraper,
          //weather,
     // directives
          "draggableModule"
     ]);

	nowPlaying.config(function($locationProvider, $urlRouterProvider){
          $locationProvider.html5Mode(true);
          $urlRouterProvider.otherwise("/");
     });

     nowPlaying.run(function($get, $rootScope, $stateParams, $state){
          // $rootScope.data = {
          //      // customers
          //           allCustomers: null,
          //           thisCustomer: null,
          //      // players
          //           allPlayers: null,
          //           thisPlayer: null,
          //      // playlists
          //           allPlaylists: {
          //                mediaPlaylists: [],
          //                directoryPlaylists: []
          //           }
          //      // buildings/floors?
          //      // schools/depts?
          // };   
     });

     nowPlaying.controller(
     "appCtrl", function($scope, $transitions, $http, $sce, $rootScope){
     let app = this;

     // clear the app.data on reload/transition...
          app.data = $rootScope.data;

     // transitions
          $transitions.onSuccess({}, function($transition){
			app.route = {
                    from: $transition.$from().name,
                    to: $transition.$to().name,
                    params: {
                         customer: $transition.params().customer,
                         player: $transition.params().player,
                    }
               };
               $rootScope.data = {
                    // customers
                         allCustomers: null,
                         thisCustomer: null,
                    // players
                         allPlayers: null,
                         thisPlayer: null,
                    // playlists
                         allPlaylists: {
                              mediaPlaylists: [],
                              directoryPlaylists: []
                         }
                    // buildings/floors?
                    // schools/depts?
               };   
               app.data = $rootScope.data;
          });
          console.log(app.data);

     // clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);


// ----------  DATA  -------------------------------------------------------------------------

     // construct $rootScope.data
          // $rootScope.data = {
          // // customers
          //      allCustomers: null,
          //      thisCustomer: null,
          // // players
          //      allPlayers: null,
          //      thisPlayer: null,
          // // playlists
          //      allPlaylists: {
          //           mediaPlaylists: [],
          //           directoryPlaylists: []
          //      }
          // // buildings/floors?
          // // schools/depts?
          // };          

     // stringify 
          app.dataObject = JSON.stringify(app.data, null, 4);

     });

})();