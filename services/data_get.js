(function () {

	let data = angular.module('data_get', []);

	data.service(
	'$get', function ($http, $rootScope, $sce) {
	var get = this;

          get.request = function (url, params, callback, secondCallback){
               $http({
                    method: 'GET',
                    url: url,
                    params: params
               }).then(function(response){
                    if(response.data[0] == "<"){
                         $rootScope.errormessage = $sce.trustAsHtml(response.data);
                    }else{
                         if (typeof callback === "function") {
                              callback(response.data, secondCallback);
                         };
                    }
               }, function(error){
                    $rootScope.errormessage = $sce.trustAsHtml(error.data);
               });
               // trigger a way to push errormessage into view via app object...
          }

          get.customers = function(callback){
               get.request(
                    '../get_customers.php',
                    null,
                    function(response){
                         $rootScope.data.allCustomers = response;
                         if (typeof callback === "function") {
                              callback(response);
                         };
                    }
               );
          }

          get.players = function(params, callback){
               get.request(
                    '../routes/screen/get_players.php',
                    params,
                    function(response){
                         $rootScope.data.allPlayers = response;
                         if (typeof callback === "function") {
                              callback(response);
                         };
                    }
               );
          }

          get.playlists = function(params, callback){
               get.request(
                    '../routes/screen/get_playlists.php',
                    params,
                    function(response){
                    // sort by type.
                         for (var i = 0; i < response.length; i++){
                              if (response[i].type == "media"){
                                   $rootScope.data.allPlaylists.media.push(response[i]);
                              } else if (response[i].type == "directory"){
                                   $rootScope.data.allPlaylists.directories.push(response[i]);
                              } else {
                              }
                         }          
                         if (typeof callback === "function") {
                              callback(response);
                         };
                    }
               );
          }

	});

})();