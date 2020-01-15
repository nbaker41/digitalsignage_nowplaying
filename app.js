(function(){

     let app = angular.module("app", [

     ]);

     app.controller("appCtrl", function($scope){
          let app = this;
          app.example = "Hello from AJS";
     });

})();