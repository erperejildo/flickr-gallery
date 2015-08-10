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
		Object.observe(dataResponse, function (c) {
			$scope.$apply(function () {
				$scope.data = dataResponse.items;
				// if we have favourites saved
				if (localStorage.getItem("favouriteIMGs")) {
					var favourites = JSON.parse(localStorage.getItem("favouriteIMGs"))
					for (var i = 0; i < favourites.length; i++) {
						$scope.data.items.push(favourites[i]);
						$scope.favourite[$scope.data.items.length - 1] = true;
					}
				}
				console.log($scope.favourite);
				console.log($scope.data.items);
			});
		});

		// when images are loaded call Masonry (image reposition)
		$scope.$on('onRepeatLast', function(scope, element, attrs) {
			$timeout(
	            function() {
	               	var container = document.querySelector('#gallery');
					var msnry = new Masonry( container, {});
	            },
	            1500
	        );
		});

		$scope.favourite = new Object;
		$scope.addRmvFavourite = function(pos) {
			var favourites = JSON.parse(localStorage.getItem("favouriteIMGs"));

			if ($scope.favourite[pos]) {
				$scope.favourite[pos] = false;
				// revome from collection
				for (var i = 0; i < favourites.length; i ++) {
					if ($scope.data.items[pos].media.m === favourites[i].media.m) {
						var b = i;
						break;
					}
				}
				console.log(b);
				console.log('ANTES: ',favourites);
				favourites.splice(b, 1);
								console.log('BORRADO: ',favourites);

			} else {
				$scope.favourite[pos] = true;
				// add to collection
				if (favourites) {
					favourites[favourites.length] = {
						media: {
							m: $scope.data.items[pos].media.m,
							favourite: true,
							pos: pos
						}
					};
				} else {
					var favourites = [{
						media: {
							m: $scope.data.items[pos].media.m,
							favourite: true,
							pos: pos
						}
					}];
				}
			}
			localStorage.setItem('favouriteIMGs', JSON.stringify(favourites));
			console.log('LOCAL: ',JSON.parse(localStorage.getItem("favouriteIMGs")));
		};


  });
