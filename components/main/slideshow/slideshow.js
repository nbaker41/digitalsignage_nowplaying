(function(){

     let slideshow = angular.module("slideshow", [
     ]);

	slideshow.component("slideshow", {
		controller: "slideshowCtrl",
		controllerAs: "slideshow",
		templateUrl: "components/main/slideshow/slideshow.html"
	});

     slideshow.controller(
     "slideshowCtrl", function($scope){
     this.app = $scope.$parent.app;
     let slideshow = this;

          console.log(slideshow);

     // ng switch
          slideshow.items = [0, 1, 2];
          var counter = 0;
          slideshow.selection = slideshow.items[counter];  
          setInterval(function(){
               counter++;
               if(counter > slideshow.items.length - 1){
                    counter = 0;
                    slideshow.selection = slideshow.items[counter]
               } else {
                    slideshow.selection = slideshow.items[counter];   
               }
          }, 5000);

     // nicks work
          function Slideshow( element ) {
               this.el = document.querySelector( element );
               this.init();
          }
          
          Slideshow.prototype = {
               init: function() {
                    this.wrapper = this.el.querySelector( ".slider-wrapper" );
                    this.slides = this.el.querySelectorAll( ".slide" );
                    this.previous = this.el.querySelector( ".slider-previous" );
                    this.next = this.el.querySelector( ".slider-next" );
                    this.index = 0;
                    this.total = this.slides.length;
                    this.timer = null;
                    
                    this.action();
                    this.stopStart();	
               },
               _slideTo: function( slide ) {
                    var currentSlide = this.slides[slide];
                    currentSlide.style.opacity = 1;
                    
                    for( var i = 0; i < this.slides.length; i++ ) {
                         var slide = this.slides[i];
                         if( slide !== currentSlide ) {
                              slide.style.opacity = 0;
                         }
                    }
               },
               action: function() {
                    var self = this;
                    self.timer = setInterval(function() {
                         self.index++;
                         if( self.index == self.slides.length ) {
                              self.index = 0;
                         }
                         self._slideTo( self.index );
                         
                    }, 6000);
               },
               stopStart: function() {
                    var self = this;
                    self.el.addEventListener( "mouseover", function() {
                         clearInterval( self.timer );
                         self.timer = null;
                         
                    }, false);
                    self.el.addEventListener( "mouseout", function() {
                         self.action();
                         
                    }, false);
               }
               
          };
          
          document.addEventListener( "DOMContentLoaded", function() {
               var slider = new Slideshow( "#slideshow" );
          });
	
     });

})();