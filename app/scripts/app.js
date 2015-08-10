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
  .directive('onLastRepeat', function() {
    return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function() {
        scope.$emit('onRepeatLast', element, attrs);
      }, 1);
    };
  })