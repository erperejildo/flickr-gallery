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
		Object.observe(dataResponse, function () {
			$scope.$apply(function () {
				$scope.data = dataResponse.items;
				// if we have favourites saved
				if (localStorage.getItem('favouriteIMGs')) {
					var favourites = JSON.parse(localStorage.getItem('favouriteIMGs'));
					//var b = 0;
					for (var i = 0; i < favourites.length; i++) {
						// active the images saved
						$scope.data.items.push(favourites[i]);
						$scope.favourite[$scope.data.items.length - 1] = true;
						// remove repeat images
						// I tried to removed the repeat images with the position of the image, but changed
						// the problem is if you active the first image again, when load page, you have 2 favourites
						/*var posRepeat = favourites[i].media.pos;
						console.log('$scope.data1: '+$scope.data.items[posRepeat].media.m);
						console.log('favourites[i].media.m: '+favourites[i].media.m);
						if ($scope.data.items[posRepeat].media.m === favourites[i].media.m) {
							$scope.data.items.splice(i - b, 1);
							console.log('$scope.data2: '+$scope.data.items[posRepeat - b].media.m);
							b++;
						}*/
					}
				}
			});
		});

		// when images are loaded call Masonry (image reposition)
		$scope.$on('onRepeatLast', function(scope, element, attrs) {
			$timeout(function() {
		        var container = document.getElementById('gallery');
				var msnry = new Masonry( container, {});
			}, 500);
		});

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
