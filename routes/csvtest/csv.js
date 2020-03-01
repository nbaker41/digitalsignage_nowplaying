(function(){

	let csvtest = angular.module("csvtest", []);

	csvtest.config(function($stateProvider){
	$stateProvider.state(
	'csvtest', {
		url: '/csv',
		templateUrl: 'routes/csvtest/csv.html',
		controller: "csvtestCtrl",
		controllerAs: "csv"
	})});

	csvtest.controller("csvtestCtrl", function($scope){
	var csv = this;
	csv.app = $scope.$parent.app;


		csv.oldobject = {
			info: {
				headers: [
					"firstname",
					"lastname",
					"floor",
					"room"
				]
			},
			data: [
				["Dan", "Marino", 3, 300],
				["Cecil", "Dunston", 3, 312],
				["Nick", "Baker", 4, 400],
				["Mariabelen", "Romero", null, null],
				["Byron", "Stokes", 1, null],
				["David", "Strube", 1, 111],
				["Mance", "Ellenburg", 2, 200]
			]
		};

		csv.object = {
			info: {
				headers: [
					"Deadline",
					"Begin Date",
					"End Date"
				]
			},
			data: [
				["Registration Deadline", null, "April 24"],
				["Turn in Paperwork", "April 1", "May 24"],
				["Class Add Deadline - Summer", null, "July 5"]
			]
		};

		function handle(object){
			var jsonToString = JSON.stringify(object);
			var stringToJson = JSON.parse(jsonToString);
			console.log(jsonToString, stringToJson);
		}

		handle(csv.object, csv.oldobject)



	// Nick's work:	
		// csv.makeTable = function (input) {
		// 	// alert("hello");
		// 	console.log(input);
		// 	var rows = input.split('\n'),
		// 		table = document.createElement('table'),
		// 		tr = null,
		// 		td = null,
		// 		tds = null;
		// 	for (var i = 0; i < rows.length; i++) {
		// 		tr = document.createElement('tr');
		// 		tds = rows[i].split(',');
		// 		for (var j = 0; j < rows.length; j++) {
		// 			tds[j] = typeof tds[j] != "undefined" ? tds[j] : ""
		// 			td = document.createElement('td');
		// 			td.innerHTML = tds[j];
		// 			tds[j] = typeof tds[j] == "undefined"
		// 			tr.appendChild(td);
		// 		}
		// 		table.appendChild(tr);
		// 	}
		// 	var x = document.querySelector("div#tablestuff");
		// 	x.appendChild(table);
		// 	// console.log(table);
		// }

	});

})();