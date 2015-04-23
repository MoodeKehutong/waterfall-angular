(function() {
	'use strict';

	angular.module('application', [
		'wu.masonry'
	]).controller('waterfallCtrl', function waterfallCtrl($scope, $window) {

		var firstLodaCount = 12,
			everyLoadCount = 12,
			totalLoadCount = 51,
			scrollScreenTimes = 0;

		function init() {

			$scope.imgTexts = [{
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '一一一一一一一一一一一一一'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '三'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '四'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五五'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '六六六六六六六六六六'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '七'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八八'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九九'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '十'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '十一十一十一十一十一十一十一十一十一十一十一十一十一'
			}, {
				imgSrc: 'assets/img/waterfall.jpg',
				imgText: '十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二十二'
			}];
		}

		function shouldLoad() {

			var windowScrollTop = angular.element(document.getElementsByTagName('body')).scrollTop(),
				windowHeight = $window.innerHeight,
				waterfallHeight = angular.element(document.getElementById('waterfall')).outerHeight();

			return (windowScrollTop + windowHeight === waterfallHeight);
		}

		window.onscroll = function() {

			if (shouldLoad()) {

				var notLoadedCount = totalLoadCount - $scope.imgTexts.length;

				for (var i = 0; i < Math.min(everyLoadCount, notLoadedCount); i++) {

					var item = {
						imgSrc: 'assets/img/waterfall.jpg',
						imgText: $scope.imgTexts.length + 1
					};

					$scope.imgTexts.push(item);
				}
			}

			$scope.$digest();

		};

		init();
	});

})();