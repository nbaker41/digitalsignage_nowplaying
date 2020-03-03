(function () {

	let header = angular.module("header", []);

	header.component("header", {
		controller: "headerCtrl",
		controllerAs: "header",
		templateUrl: "components/header/header.html"
	});

	header.controller(
	"headerCtrl",
	function ($scope) {
	this.app = $scope.$parent.app;
	let header = this;

	// generate lines in header design
		header.lines = {
			number: 98,
			get: function(x){
				return new Array(x);
			},
			set: function(x){
				this.number = x;
			}
		}

	// menu toggle
		header.menu = {
			isOpen: false,
			toggle: function(){
				if(this.isOpen == true){
					this.isOpen = false;
				} else{
					this.isOpen = true;
				}
			}
		}

	});

})();