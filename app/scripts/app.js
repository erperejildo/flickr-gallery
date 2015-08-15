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
    // when images loaded
    .directive('elemReady', function($parse) {
        return {
            restrict: 'A',
            link: function($scope, elem, attrs) {
                elem.ready(function() {
                    $scope.$apply(function() {
                        var func = $parse(attrs.elemReady);
                        func($scope);
                    })
                })
            }
        }
    });