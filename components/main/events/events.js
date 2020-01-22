(function(){

     let events = angular.module("events", [
     ]);

	events.component("events", {
		controller: "eventsCtrl",
		controllerAs: "events",
		templateUrl: "components/main/events/events.html"
	});

     events.controller(
     "eventsCtrl", function($scope, $timeout){
     this.app = $scope.$parent.app;
     let events = this;

          events.text = "Top Section";
          console.log(events);

     // nicks work
          var slidesInSlideshow = 4;
          var slidesTimeIntervalInMs = 6000; 
         
          events.slideshow = 1;
          var slideTimer =
               $timeout(function interval() {
                    events.slideshow = (events.slideshow % slidesInSlideshow) + 1;
                    slideTimer = $timeout(interval, slidesTimeIntervalInMs);
               }, slidesTimeIntervalInMs);
               

     });

})();