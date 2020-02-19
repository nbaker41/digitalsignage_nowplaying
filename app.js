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
          app.stuff = "hey";
          alert(app.stuff);
	// pull images from sql database via php file and http request...
          // upload.read = function(){
		// set up http request
			var request = $http({
				method: 'GET',
				url: 'get_customers.php',
			});
		// submit http request
			request.then(function(response){
				if(response.data[0] == "<"){
					console.log(response);
				}else{
					upload.pics = response.data;
					console.log(response);
				}
				// upload.errormessage = $sce.trustAsHtml(upload.pics);
			}, function(error){
				alert(error.data);
			});
		// }
     });

     app.controller(
     "appCtrl", function($scope, $transitions){
     let app = this;

     // need to see if sql's datetime format is the same as this
          app.dateTimeExample = "2020-02-11T13:57:01.395Z";

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
          app.data = {
               allCustomers: [
               ],
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


     // app.sitedata
          app.siteData = JSON.stringify(siteData, null, 4);

     // handle the clock
          app.tick = setInterval(function(){
               app.currentTime = new Date();
               $scope.$apply();
          }, 1000);
     });

})();