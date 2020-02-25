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

     // transitions
          $transitions.onSuccess({}, function($transition){
          // gather route info...
			app.route = {
                    from: $transition.$from().name,
                    to: $transition.$to().name,
                    params: {
                         customer: $transition.params().customer,
                         player: $transition.params().player,
                    }
               };
          // clear the rootscope..
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
               app.data = JSON.stringify($rootScope.data, null, 4);
          });

     // clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);


// ----------  DATA  -------------------------------------------------------------------------

     });

})();