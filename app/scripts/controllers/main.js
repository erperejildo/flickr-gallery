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
				//$scope.data.items[$scope.data.items.length].media.m = localStorage.getItem("favouriteIMGs");
				//
				var favourites = JSON.parse(localStorage.getItem("favouriteIMGs"))
				for (var i = 0; i < favourites.length; i++) {
					$scope.data.items.push(favourites[i]);
				}
				console.log($scope.data.items);
			});
		});

		// when images are loaded call Masonry (image reposition)
		$scope.$on('onRepeatLast', function(scope, element, attrs) {
			$timeout(
	            function() {
	               	var container = document.querySelector('#gallery');
					var msnry = new Masonry( container, {}); var msnry = new Masonry( '#gallery', {}); 
	            },
	            1500
	        );
		});

		$scope.favourite = function(pos) {
			if ($scope.favourite[pos]) {
				$scope.favourite[pos] = false;
			} else {
				$scope.favourite[pos] = true;

				if (localStorage.getItem('favouriteIMGs')) {
					var favourites = JSON.parse(localStorage.getItem("favouriteIMGs"));
					favourites[favourites.length] = {
						media: {
							m: $scope.data.items[pos].media.m
						}
					};
				} else {
					var favourites = [{
						media: {
							m: $scope.data.items[pos].media.m
						}
					}];
				}
				
				localStorage.setItem('favouriteIMGs', JSON.stringify(favourites));
				console.log('LOCAL: ',JSON.parse(localStorage.getItem("favouriteIMGs")));
			}
		};


  });
