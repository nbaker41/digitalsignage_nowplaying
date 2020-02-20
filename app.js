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

     // pull all customers
          var request = $http({
               method: 'GET',
               url: './get_customers.php',
          });
          request.then(function(response){
               if(response.data[0] == "<"){
                    app.errormessage = $sce.trustAsHtml(response.data);
               }else{
                    console.log(response.data);
                    $rootScope.data.allCustomers = response.data;
                    console.log($rootScope.data);
               }
          }, function(error){
               app.errormessage = $sce.trustAsHtml(error.data);
          });

     // make app.data == $rootScope.data...


// ----------  END APP.DATA  ------------------------------------------------------------------------------------------------------------------


     // need to see if sql's datetime format is the same as this
          // app.dateTimeExample = "2020-02-11T13:57:01.395Z";

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


     // app.sitedata
          app.siteData = JSON.stringify(siteData, null, 4);
          app.data = JSON.stringify(app.data, null, 4);

     // handle the clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);
     });

})();