(function(){

     let slideshow = angular.module("slideshow", [
     ]);

	slideshow.component("slideshow", {
		controller: "slideshowCtrl",
		controllerAs: "slideshow",
		templateUrl: "components/main/slideshow/slideshow.html"
	});

     slideshow.controller(
     "slideshowCtrl", function($scope, $rootScope){
     this.app = $scope.$parent.app;
     let slideshow = this;

     
     
     // get all media items for the first media playlist...
          slideshow.items = slideshow.app.data.allPlaylists.mediaPlaylists[1].items;
          // console.log(slideshow.app.data.allPlaylists);

     // find file path...
          var root = "../../..";
          var path = "/files/customers/";
          var customer = slideshow.app.data.thisCustomer.name_short;
          var type = "/media";
          slideshow.commonPath = root + path + customer + type;

     // ng switch
          var counter = 0;
          slideshow.currentItem = slideshow.items[counter];  
          setInterval(function(){
               counter++;
               if(counter > slideshow.items.length - 1){
                    counter = 0;
                    slideshow.currentItem = slideshow.items[counter];
               } else {
                    slideshow.currentItem = slideshow.items[counter];
               }
               $scope.$apply();
          }, 5000);
          
     });

})();