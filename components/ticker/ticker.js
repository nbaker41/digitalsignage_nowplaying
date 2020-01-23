(function(){

     let ticker = angular.module("ticker", [
     ]);

	ticker.component("ticker", {
		controller: "tickerCtrl",
		controllerAs: "ticker",
		templateUrl: "components/ticker/ticker.html"
	});

     ticker.controller(
     "tickerCtrl", function($scope){
     this.app = $scope.$parent.app;
     let ticker = this;

          ticker.text = "Ticker Section";
          console.log(ticker);

          // $(document).ready(function(){
               $("ticker > div").breakingNews({
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
          // });
     

     });

})();