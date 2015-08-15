'use strict';

/**
 * @ngdoc function
 * @name flickrGalleryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrGalleryApp
 */
angular.module('flickrGalleryApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {

		// assign the response with images to scope
  		$scope.getData = function() {
			$scope.data = dataResponse.items;
			// if we have favourites saved
			if (localStorage.getItem('favouriteIMGs')) {
				var favourites = JSON.parse(localStorage.getItem('favouriteIMGs'));
				var items = $scope.data.items.length;
				for (var i = 0; i < favourites.length; i++) {
					// active the images saved
					$scope.data.items.push(favourites[i]);
					// if $scope.favourite is true we have this img as favourite saved
					$scope.favourite[items - 1] = true;
					// remove repeat images
					for (var d = 0; d < items; d ++) {
						if ($scope.data.items[d].media.m === favourites[i].media.m) {
							$scope.data.items.splice(d, 1);
							items --;
						}
					}
				}
			}
  		};

		if (typeof(dataResponse.items) !== 'undefined') {
			// online
			$scope.getData();
		} else {
			// local
			Object.observe(dataResponse, function () {
				$scope.$apply(function () {
					$scope.getData();
				});
			});
		}

		// when images are loaded call Masonry (image reposition)
		$scope.placeIMGs = function() {
	  		var container = document.getElementById('gallery');
			var msnry = new Masonry( container, {});
	  	};

		$scope.favourite = new Object();
		$scope.addRmvFavourite = function(pos) {
			var favourites = JSON.parse(localStorage.getItem('favouriteIMGs'));

			if ($scope.favourite[pos]) {
				$scope.favourite[pos] = false;
				// revome from collection
				for (var i = 0; i < favourites.length; i ++) {
					if ($scope.data.items[pos].media.m === favourites[i].media.m) {
						var b = i;
						break;
					}
				}
				favourites.splice(b, 1);
			} else {
				$scope.favourite[pos] = true;
				// add to collection
				if (favourites) {
					favourites[favourites.length] = {
						media: {
							m: $scope.data.items[pos].media.m
							//pos: pos
						}
					};
				} else {
					var favourites = [{
						media: {
							m: $scope.data.items[pos].media.m
							//pos: pos
						}
					}];
				}
			}
			localStorage.setItem('favouriteIMGs', JSON.stringify(favourites));
		};

  });
