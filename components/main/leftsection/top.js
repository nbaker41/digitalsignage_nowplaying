(function(){

     let top = angular.module("top", [
     ]);

	top.component("top", {
		controller: "topCtrl",
		controllerAs: "top",
		templateUrl: "components/top/top.html"
	});

     top.controller(
     "topCtrl", function($scope){
     this.app = $scope.$parent.app;
     let top = this;

          top.text = "Top Section";
          console.log(top);

     });

})();