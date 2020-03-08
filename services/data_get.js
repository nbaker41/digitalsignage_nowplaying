(function () {

	let data = angular.module('data_get', []);

	data.service(
	'$get',
	function ($http, $rootScope, $sce, $notify) {
	var get = this;

		get.clearRootScope = function(){
		// try to make dark mode persist until I write it into db...
			// if ($rootScope.data.darkmode == true){
				$rootScope.data = {
				// customers
					allCustomers: null,
					thisCustomer: null,
				// players
					allPlayers: null,
					thisPlayer: null,
				// playlists
					allPlaylists: {
						mediaPlaylists: [],
						directoryPlaylists: []
					},
					darkmode: true
					// buildings/floors?
					// schools/depts?
				};
			// } else {
			// 	$rootScope.data = {
			// 	// customers
			// 		allCustomers: null,
			// 		thisCustomer: null,
			// 	// players
			// 		allPlayers: null,
			// 		thisPlayer: null,
			// 	// playlists
			// 		allPlaylists: {
			// 			mediaPlaylists: [],
			// 			directoryPlaylists: []
			// 		},
			// 		darkmode: false
			// 		// buildings/floors?
			// 		// schools/depts?
			// 	};
			// }
			console.log($rootScope.data);
		}

		get.request = function (url, params, callback, secondCallback) {
			$http({
				method: 'GET',
				url: url,
				params: params
			}).then(function (response) {
				if (response.data[0] == "<") {
					$rootScope.errormessage = response.data;
					$notify.alert("ALERT", $rootScope.errormessage);
					
				} else {
					if (typeof callback === "function") {
						callback(response.data, secondCallback);
					};
				}
			}, function (error) {
				$rootScope.errormessage = error.data;
				$notify.alert("ALERT", $rootScope.errormessage);
			});
		// trigger a way to push errormessage into view via app object...
			// function 
		}

		get.customers = function (callback) {
			get.request(
				'../get_customers.php',
				null,
				function (response) {
					$rootScope.data.allCustomers = response;
					if (typeof callback === "function") {
						callback(response);
					};
				}
			);
		}

		get.players = function (params, callback) {
			// console.log(params, callback);
			get.request(
				'../routes/screen/get_players.php',
				params,
				function (response) {
					$rootScope.data.allPlayers = response;
					// console.log(response);
					if (typeof callback === "function") {
						callback(response);
					};
				}
			);
		}

		get.playlists = function (params, callback) {
			get.request(
				'../routes/screen/get_playlists.php',
				params,
				function (response) {
					// console.log(response);
					// sort by type.
					for (var i = 0; i < response.length; i++) {
						if (response[i].type == "media") {
							response[i].items = [];
							$rootScope.data.allPlaylists.mediaPlaylists.push(response[i]);
						} else if (response[i].type == "directory") {
							response[i].items = [];
							$rootScope.data.allPlaylists.directoryPlaylists.push(response[i]);
						} else {}
					}
					if (typeof callback === "function") {
						callback(response);
					};
				}
			);
		}

		get.playlistItems = function (params, callback) {
			get.request(
				"../routes/screen/get_playlist-items.php",
				params,
				function (response) {
					if (typeof callback === "function") {
						callback(response);
					};
				}
			)
		}

	});

})();