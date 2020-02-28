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
			counter++;
			if (counter > directory.items.length - 1) {
				counter = 0;
				directory.currentItem = directory.items[counter];
			} else {
				directory.currentItem = directory.items[counter];
			}
			$scope.$apply();
			console.log(directory.currentItem);
		}, 5000);


	// placeholder data...
		var data = [{
				firstname: "Cecil",
				lastname: "Dunston",
				floor: 3,
				room: 312
			},
			{
				firstname: "Nick",
				lastname: "Baker",
				floor: 4,
				room: 400
			},
			{
				firstname: "Mariabelen",
				lastname: "Romero",
				floor: 3,
				room: 326
			},
			{
				firstname: "Byron",
				lastname: "Stokes",
				floor: 1,
				room: 105
			},
			{
				firstname: "David",
				lastname: "Strube",
				floor: 1,
				room: 111
			},
			{
				firstname: "Mance",
				lastname: "Ellenburg",
				floor: 2,
				room: 200
			}
		];

		directory.tabledata = data;

	});

})();