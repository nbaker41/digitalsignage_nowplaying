function slideShowController($scope, $timeout) {
var slidesInSlideshow = 4;
var slides = ['images/bluebg2.png', 'images/graybg2.png']
$scope.slide_image = slides[0];

i=1;
$timeout(function() {
  $scope.slide_image = slides[i%slides.length];
  i++;
  }, 3000);
}