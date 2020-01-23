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

     // ng switch
          events.items = [0, 1];
          var counter = 0;
          events.selection = events.items[counter];  
          function resetSwitch(){
               counter = 0;
               events.selection = events.items[counter]
          } 
          setInterval(function(){
               var total = events.items.length - 1;
               counter++;
               events.selection = events.items[counter];   
               if(counter > total){
                    resetSwitch();
               }
          }, 5000);

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