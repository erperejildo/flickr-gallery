'use strict';

/**
 * @ngdoc overview
 * @name flickrGalleryApp
 * @description
 * # flickrGalleryApp
 *
 * Main module of the application.
 */
angular
    .module('flickrGalleryApp', [])
    .directive('imageonload', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
            	if (scope.$last) setTimeout(function() {
            		element.bind('load', function() {
	                	scope.$emit('onRepeatLast', element, attrs);
	                });
	            }, 1);
                
            }
        };
    });