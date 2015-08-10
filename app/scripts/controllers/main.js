'use strict';

/**
 * @ngdoc function
 * @name flickrGalleryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrGalleryApp
 */
angular.module('flickrGalleryApp')
  .controller('MainCtrl', function ($scope) {
    
    (function(){
		function cb(data){
			console.log(data);
		}
		var tags   = 'london';
		var script = document.createElement('script');
		script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags='+tags;
		document.head.appendChild(script);
		//document.getElementsByTagName('head')[0].appendChild(script);
	})();

  });
