function slideShowController($scope, $timeout) {
    var slidesInSlideshow = 4;
    var slidesTimeIntervalInMs = 6000; 
   
    $scope.slideshow = 1;
    var slideTimer =
    $timeout(function interval() {
        $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
        slideTimer = $timeout(interval, slidesTimeIntervalInMs);
        }, slidesTimeIntervalInMs);
    }