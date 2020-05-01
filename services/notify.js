(function () {

	let notify = angular.module('notify', []);

	notify.service(
	'$notify',
	function ($http, $rootScope, $sce) {
	var notify = this;

		notify.alert = function (type, msg){
			// alert(type + ": " + msg);
			console.dir(msg);
			var modal = document.querySelector("#modal-main");
			modal.innerHTML = msg;
		}

	});

})();