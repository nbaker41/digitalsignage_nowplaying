(function(){

     let directory = angular.module("directory", []);

	directory.component("directory", {
		controller: "directoryCtrl",
		controllerAs: "directory",
		templateUrl: "components/main/directory/directory.html"
	});

     directory.controller(
     "directoryCtrl", function($scope, $state, $rootScope, $get, $stateParams){
     this.app = $scope.$parent.app;
     let directory = this;

          directory.stuff = "$rootScope.data.allPlayers";

          // $scope.$on('$viewContentLoaded', function(){
          // });
          // directory.app.data = $rootScope.data;
      
          // alert(directory.app.data.allPlaylists);

          // directory.playlists = [];

          // var ap = directory.app.data.allPlaylists;
          // for(var i = 0; i < ap.length; i++){
          //      if (ap[i].type == "directory"){
          //           directory.playlists.push(ap[i]);
          //      }
          // }

          // console.log(directory.playlists);

          var data = [
               {firstname: "Cecil", lastname: "Dunston", floor: 3, room: 312},
               {firstname: "Nick", lastname: "Backer", floor: 4, room: 400},
               {firstname: "Mariabelen", lastname: "Romero", floor: 3, room: 326},
               {firstname: "Byron", lastname: "Stokes", floor: 1, room: 105},
               {firstname: "David", lastname: "Strube", floor: 1, room: 111},
               {firstname: "Mance", lastname: "Ellenburg", floor: 2, room: 200}
          ];

          directory.tabledata = data;

     });

})();