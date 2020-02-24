(function(){

     let directory = angular.module("directory", []);

	directory.component("directory", {
		controller: "directoryCtrl",
		controllerAs: "directory",
		templateUrl: "components/main/directory/directory.html"
	});

     directory.controller(
     "directoryCtrl", function($scope){
     this.app = $scope.$parent.app;
     let directory = this;

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