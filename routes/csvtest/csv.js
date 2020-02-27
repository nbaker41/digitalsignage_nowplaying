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

		// alert("hellooooooo");

		// csv.ex = {
		// 	text: "hi",
		// 	fun: function(){
		// 		console.log(this.text);
		// 	}
		// }
		csv.makeTable = function (input) {
			// alert("hello");
			console.log(input);
			var rows = input.split('\n'),
				table = document.createElement('table'),
				tr = null,
				td = null,
				tds = null;
			for (var i = 0; i < rows.length; i++) {
				tr = document.createElement('tr');
				tds = rows[i].split(',');
				for (var j = 0; j < rows.length; j++) {
					tds[j] = typeof tds[j] != "undefined" ? tds[j] : ""
					td = document.createElement('td');
					td.innerHTML = tds[j];
					tds[j] = typeof tds[j] == "undefined"
					tr.appendChild(td);
				}
				table.appendChild(tr);
			}
			var x = document.querySelector("div#tablestuff");
			x.appendChild(table);
			// console.log(table);
		}

		// csv.makeTable = function(){

		// }

		// csv.makeTable(
		// 	"first name,last name,phone number
		// 	cecil,dunston,2345678901"
		// )

	});

})();