(function(){

     let keyboard = angular.module("keyboard", [
     ]);

	keyboard.component("keyboard", {
		controller: "keyboardCtrl",
		controllerAs: "keyboard",
		templateUrl: "components/keyboard/keyboard.html"
	});

     keyboard.controller(
     "keyboardCtrl", function($scope){
     this.app = $scope.$parent.app;
     let keyboard = this;

          keyboard.text = "Top Section";
          console.log(keyboard);

     });

})();