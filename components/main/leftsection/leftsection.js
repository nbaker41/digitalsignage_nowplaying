(function(){

     let leftsection = angular.module("leftsection", [
     ]);

	leftsection.component("leftsection", {
		controller: "leftsectionCtrl",
		controllerAs: "leftsection",
		templateUrl: "components/main/leftsection/leftsection.html"
	});

     leftsection.controller(
     "leftsectionCtrl", function($scope){
     this.app = $scope.$parent.app;
     let leftsection = this;

          leftsection.text = "Left Section";
          console.log(leftsection.app);

     });

})();