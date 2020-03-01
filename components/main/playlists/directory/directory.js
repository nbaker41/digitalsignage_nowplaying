(function () {

	let directory = angular.module("directory", []);

	directory.component("directory", {
		controller: "directoryCtrl",
		controllerAs: "directory",
		templateUrl: "components/main/playlists/directory/directory.html"
	});

	directory.controller(
	"directoryCtrl",
	function ($scope, $state, $rootScope, $get, $stateParams) {
	this.app = $scope.$parent.playlists.app;
	let directory = this;

	// get all directory items for the first directory playlist...
		directory.items = directory.app.data.allPlaylists.directoryPlaylists[0].items;

	//  select this playlist's items...
		var counter = 0;
		directory.currentItem = directory.items[counter];
		setInterval(function () {
			// counter++;
			// if (counter > directory.items.length - 1) {
			// 	counter = 0;
			// 	directory.currentItem = directory.items[counter];
			// } else {
				directory.currentItem = directory.items[counter];
				directory.table = JSON.parse(directory.currentItem.file_contents);
				
			// }
			$scope.$apply();
			// console.log(directory.currentItem);
		}, 5000);


	// placeholder data...
		var data = [
			["Dan", "Marino", 3, 300],
			["Cecil", "Dunston", 3, 312],
			["Nick", "Baker", 4, 400],
			["Mariabelen", "Romero", null, null],
			["Byron", "Stokes", 1, null],
			["David", "Strube", 1, 111],
			["Mance", "Ellenburg", 2, 200]
		];
		var data2 = [
			["Registration Deadline", null, "April 24"],
			["Turn in Paperwork", "April 1", "May 24"],
			["Class Add Deadline - Summer", null, "July 5"]
		];

		directory.tabledata = data2;

	});

})();