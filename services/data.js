(function () {

	let dataService = angular.module(
	'dataservice', []);

	dataService.service(
	'$data', function ($http, $rootScope) {
	const api = '';
	var data = this;

	// about, etc
		data.getCustomers = function (callback) {
          // pull all customers
               $http({
                    method: 'GET',
                    url: '../get_customers.php',
               }).then(function(response){
                    if(response.data[0] == "<"){
                         $rootScope.errormessage = $sce.trustAsHtml(response.data);
                    }else{
                         $rootScope.data.allCustomers = response.data;
                         if (typeof callback === "function") {
                              callback(response.data);
                         };
                         // findThisCustomer();
                         // customer.app.data = $rootScope.data;
                    }
               }, function(error){
                    $rootScope.errormessage = $sce.trustAsHtml(error.data);
               });
          };

	});

})();