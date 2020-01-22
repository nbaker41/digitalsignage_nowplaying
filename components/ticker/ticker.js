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

          $(document).ready(function(){
               $('#newsTicker2').breakingNews({
                    source: {
                         type:'rss',
                         usingApi:'rss2json',
                         rss2jsonApiKey: 'cyiypyqjbintczwhdb09gwjfv1nh7nsibro05qur',
                         url:'https://www.news.gatech.edu/rss/all', 
                         limit:20, 
                         showingField:'title',
                         linkEnabled: true,
                         target:'_blank', 
                         seperator: '<span class="bn-seperator" style="background-image:url(images/cnn-logo.png);"></span>',
                         errorMsg: 'RSS Feed not loaded. Please try again.'
                    }
               });
          });
     

     });

})();