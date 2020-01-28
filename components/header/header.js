(function(){

     let header = angular.module("header", [
     ]);

	header.component("header", {
		controller: "headerCtrl",
		controllerAs: "header",
		templateUrl: "components/header/header.html"
	});

     header.controller(
     "headerCtrl", function($scope){
     this.app = $scope.$parent.app;
     let header = this;

     });

})();