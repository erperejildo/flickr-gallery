'use strict';

/**
 * @ngdoc function
 * @name flickrGalleryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrGalleryApp
 */
angular.module('flickrGalleryApp')
  .controller('MainCtrl', function ($scope, $http) {
    
		(function(){
			function cb(data){
				// use returned data
				console.log(data);
			}
			/*var tags   = 'london';
			var script = document.createElement('script');
			script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags='+tags;
			document.head.appendChild(script);*/
		})();


		$scope.data = {
		"title": "Recent Uploads tagged london",
		"link": "http://www.flickr.com/photos/tags/london/",
		"description": "",
		"modified": "2015-08-10T11:53:50Z",
		"generator": "http://www.flickr.com/",
		"items": [
	   {
			"title": "",
			"link": "http://www.flickr.com/photos/approachingbeauty/20269369749/",
			"media": {"m":"http://farm1.staticflickr.com/313/20269369749_71fdb0ab74_m.jpg"},
			"date_taken": "2015-08-09T17:19:39-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/approachingbeauty/\">Approaching Beauty<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/approachingbeauty/20269369749/\" title=\"\"><img src=\"http://farm1.staticflickr.com/313/20269369749_71fdb0ab74_m.jpg\" width=\"160\" height=\"240\" alt=\"\" /><\/a><\/p> ",
			"published": "2015-08-10T11:53:50Z",
			"author": "nobody@flickr.com (Approaching Beauty)",
			"author_id": "51169742@N08",
			"tags": "life street girls portrait colour sexy london beauty fashion women pretty approachingbeauty"
	   },
	   {
			"title": "",
			"link": "http://www.flickr.com/photos/approachingbeauty/19835173983/",
			"media": {"m":"http://farm4.staticflickr.com/3787/19835173983_05c7d40370_m.jpg"},
			"date_taken": "2015-08-09T17:31:01-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/approachingbeauty/\">Approaching Beauty<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/approachingbeauty/19835173983/\" title=\"\"><img src=\"http://farm4.staticflickr.com/3787/19835173983_05c7d40370_m.jpg\" width=\"160\" height=\"240\" alt=\"\" /><\/a><\/p> ",
			"published": "2015-08-10T11:56:58Z",
			"author": "nobody@flickr.com (Approaching Beauty)",
			"author_id": "51169742@N08",
			"tags": "life street girls portrait colour sexy london beauty fashion women pretty approachingbeauty"
	   },
	   {
			"title": "Colour, sunshine, happiness !",
			"link": "http://www.flickr.com/photos/98884580@N07/20267908948/",
			"media": {"m":"http://farm4.staticflickr.com/3824/20267908948_ca00022468_m.jpg"},
			"date_taken": "2015-08-08T16:21:24-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/98884580@N07/\">RoySutherland235<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/98884580@N07/20267908948/\" title=\"Colour, sunshine, happiness !\"><img src=\"http://farm4.staticflickr.com/3824/20267908948_ca00022468_m.jpg\" width=\"240\" height=\"171\" alt=\"Colour, sunshine, happiness !\" /><\/a><\/p> <p>DSC_0010-1<\/p>",
			"published": "2015-08-10T11:51:38Z",
			"author": "nobody@flickr.com (RoySutherland235)",
			"author_id": "98884580@N07",
			"tags": "music colour london sunshine hair stage trafalgarsquare brazilday2015"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20267743008/",
			"media": {"m":"http://farm4.staticflickr.com/3802/20267743008_79f0929d61_m.jpg"},
			"date_taken": "2015-08-10T13:41:04-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20267743008/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm4.staticflickr.com/3802/20267743008_79f0929d61_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:47Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Dartford",
			"link": "http://www.flickr.com/photos/rfraser/20269121709/",
			"media": {"m":"http://farm1.staticflickr.com/565/20269121709_e7cbe49415_m.jpg"},
			"date_taken": "2015-04-19T13:36:11-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/rfraser/\">Richard:Fraser<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/rfraser/20269121709/\" title=\"Dartford\"><img src=\"http://farm1.staticflickr.com/565/20269121709_e7cbe49415_m.jpg\" width=\"240\" height=\"240\" alt=\"Dartford\" /><\/a><\/p> <p>The bridge in the distance, beyond the hard engineering of the riverbank.<\/p>",
			"published": "2015-08-10T11:41:15Z",
			"author": "nobody@flickr.com (Richard:Fraser)",
			"author_id": "34114191@N04",
			"tags": "london architecture architecturalphotographer londonstreetview urbanphotographyuk architecturalphotographybyrichardfraser copyrightrichardfraser2015allrightsreserved"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20447084112/",
			"media": {"m":"http://farm1.staticflickr.com/517/20447084112_442703f17c_m.jpg"},
			"date_taken": "2015-08-10T13:41:44-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20447084112/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/517/20447084112_442703f17c_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:42Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20269125299/",
			"media": {"m":"http://farm1.staticflickr.com/532/20269125299_b279e2fd25_m.jpg"},
			"date_taken": "2015-08-10T13:41:22-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20269125299/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/532/20269125299_b279e2fd25_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:45Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/19833142994/",
			"media": {"m":"http://farm1.staticflickr.com/285/19833142994_0d3981600b_m.jpg"},
			"date_taken": "2015-08-10T13:41:56-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/19833142994/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/285/19833142994_0d3981600b_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:41Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20447079292/",
			"media": {"m":"http://farm1.staticflickr.com/538/20447079292_3ae41e1c4b_m.jpg"},
			"date_taken": "2015-08-10T13:41:28-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20447079292/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/538/20447079292_3ae41e1c4b_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:44Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Light You Up @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/19834859953/",
			"media": {"m":"http://farm1.staticflickr.com/454/19834859953_88822c49e6_m.jpg"},
			"date_taken": "2015-08-10T13:40:58-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/19834859953/\" title=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/454/19834859953_88822c49e6_m.jpg\" width=\"240\" height=\"160\" alt=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:40Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "light music london up you concertphotography hoxtonsquare musicphotography livephotography lastfm:event=4163311"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20267745178/",
			"media": {"m":"http://farm1.staticflickr.com/564/20267745178_87f98b2df5_m.jpg"},
			"date_taken": "2015-08-10T13:41:11-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20267745178/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/564/20267745178_87f98b2df5_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:43Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20462029411/",
			"media": {"m":"http://farm1.staticflickr.com/446/20462029411_5391571afa_m.jpg"},
			"date_taken": "2015-08-10T13:41:37-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20462029411/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/446/20462029411_5391571afa_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:47Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Light You Up @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20267654190/",
			"media": {"m":"http://farm1.staticflickr.com/464/20267654190_7697dc292c_m.jpg"},
			"date_taken": "2015-08-10T13:40:32-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20267654190/\" title=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/464/20267654190_7697dc292c_m.jpg\" width=\"240\" height=\"160\" alt=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:37Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "light music london up you concertphotography hoxtonsquare musicphotography livephotography lastfm:event=4163311"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20267747248/",
			"media": {"m":"http://farm1.staticflickr.com/567/20267747248_9ac22a86e6_m.jpg"},
			"date_taken": "2015-08-10T13:41:16-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20267747248/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/567/20267747248_9ac22a86e6_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:46Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Light You Up @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20269113929/",
			"media": {"m":"http://farm1.staticflickr.com/391/20269113929_de68a642d1_m.jpg"},
			"date_taken": "2015-08-10T13:40:47-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20269113929/\" title=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/391/20269113929_de68a642d1_m.jpg\" width=\"240\" height=\"160\" alt=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:34Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "light music london up you concertphotography hoxtonsquare musicphotography livephotography lastfm:event=4163311"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20267683170/",
			"media": {"m":"http://farm1.staticflickr.com/255/20267683170_cebae16fbf_m.jpg"},
			"date_taken": "2015-08-10T13:42:02-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20267683170/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/255/20267683170_cebae16fbf_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:40Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Light You Up @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20462011271/",
			"media": {"m":"http://farm1.staticflickr.com/532/20462011271_79723a4384_m.jpg"},
			"date_taken": "2015-08-10T13:40:40-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20462011271/\" title=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/532/20462011271_79723a4384_m.jpg\" width=\"240\" height=\"160\" alt=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:35Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "light music london up you concertphotography hoxtonsquare musicphotography livephotography lastfm:event=4163311"
	   },
	   {
			"title": "Don Broco @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20267758838/",
			"media": {"m":"http://farm1.staticflickr.com/504/20267758838_004152de1f_m.jpg"},
			"date_taken": "2015-08-10T13:41:51-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20267758838/\" title=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm1.staticflickr.com/504/20267758838_004152de1f_m.jpg\" width=\"240\" height=\"160\" alt=\"Don Broco @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:42Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "music london concertphotography hoxtonsquare musicphotography livephotography donbroco lastfm:event=4163311"
	   },
	   {
			"title": "Light You Up @ Hoxton Square Bar & Kitchen, London 07.08.2015",
			"link": "http://www.flickr.com/photos/iwontgiveup/20269115209/",
			"media": {"m":"http://farm4.staticflickr.com/3756/20269115209_029b8e7670_m.jpg"},
			"date_taken": "2015-08-10T13:40:51-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/iwontgiveup/\">Alba Fle<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/iwontgiveup/20269115209/\" title=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\"><img src=\"http://farm4.staticflickr.com/3756/20269115209_029b8e7670_m.jpg\" width=\"240\" height=\"160\" alt=\"Light You Up @ Hoxton Square Bar &amp; Kitchen, London 07.08.2015\" /><\/a><\/p> <p>Shot for Ticketmaster UK<\/p>",
			"published": "2015-08-10T11:45:39Z",
			"author": "nobody@flickr.com (Alba Fle)",
			"author_id": "37094496@N05",
			"tags": "light music london up you concertphotography hoxtonsquare musicphotography livephotography lastfm:event=4163311"
	   },
	   {
			"title": "",
			"link": "http://www.flickr.com/photos/approachingbeauty/20267633988/",
			"media": {"m":"http://farm1.staticflickr.com/489/20267633988_c8167d5b07_m.jpg"},
			"date_taken": "2015-08-09T17:04:41-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/approachingbeauty/\">Approaching Beauty<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/approachingbeauty/20267633988/\" title=\"\"><img src=\"http://farm1.staticflickr.com/489/20267633988_c8167d5b07_m.jpg\" width=\"160\" height=\"240\" alt=\"\" /><\/a><\/p> ",
			"published": "2015-08-10T11:35:31Z",
			"author": "nobody@flickr.com (Approaching Beauty)",
			"author_id": "51169742@N08",
			"tags": "life street girls portrait colour sexy london beauty fashion women pretty approachingbeauty"
	   }
        ]
};

	$scope.favourite = function(pos) {
		if ($scope.favourite[pos]) {
			$scope.favourite[pos] = false;
		} else {
			$scope.favourite[pos] = true;
		}
	};


  });
