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
				{
					firstname: "Dan",
					lastname: "Marino",
					floor: 3,
					room: 300
				},
				{
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
					floor: null,
					room: null
				},
				{
					firstname: "Byron",
					lastname: "Stokes",
					floor: 1,
					room: null
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
			]
		}

		csv.object = {
			info: {
				headers: [
					"Deadline",
					"Begin Date",
					"End Date"
				]
			},
			data: [
				{
					deadline: "Registration Deadline",
					begin: null,
					end: "April 24"
				},
				{
					deadline: "Turn in Paperwork",
					begin: "April 1",
					end: "May 24"
				},
				{
					deadline: "Class Add Deadline - Summer",
					begin: null,
					end: "July 5"
				}
			]
		}

		var jsonToString = JSON.stringify(csv.object);
		var stringToJson = JSON.parse(jsonToString);

		console.log(jsonToString, stringToJson);


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