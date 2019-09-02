/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

	var $GeneralScope = {

		// Constructor
		init: function init() {
			this.menuScripts();
			this.svgScripts();
		},

		// scripts for Menu
		menuScripts: function menuScripts() {
			$(window).scroll(function () {

				var scroll = $(window).scrollTop();
				var header_el = $('.navbar');

				if (scroll >= 100) {
					header_el.addClass("scroll_menu");
				} else {
					header_el.removeClass("scroll_menu");
				}
			});
		},

		// scripts for SVG Animations
		svgScripts: function svgScripts() {
			var LogoSource = $('#logo-svg');
			if (LogoSource.length) {
				new Vivus('logo-svg', {
					file: '/wp-content/themes/pisardi-theme/images/logo.svg',
					onReady: function onReady(myVivus) {
						// `el` property is the SVG element
						//myVivus.el.setAttribute('height', 'auto');
					}
				});
			}
		}
	};

	// -- Home -- //
	var $HomeScope = {

		// Constructor
		init: function init() {
			// Instance functions
			this.homeSlider();
		},

		// scripts for banner
		homeSlider: function homeSlider() {
			var $SliderWrapper = $('.hero-slider');
			var $SliderItems = $SliderWrapper.find('.hero-slider__row');
			var $SlidesOpts = {
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: true,
				lazyLoad: 'ondemand',
				responsive: [{
					breakpoint: 1024,
					settings: {
						vertical: false,
						infinite: true,
						dots: true
					}
				}]
			};

			function mouseWheel($slider) {
				$(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
			}

			function mouseWheelHandler(event) {
				event.preventDefault();
				var $slider = event.data.$slider;
				var delta = event.originalEvent.deltaY;
				if (delta < 0) {
					$slider.slick('slickPrev');
				} else {
					$slider.slick('slickNext');
				}
			}

			if ($SliderItems.length > 0) {
				var $sliderHome = $SliderWrapper.slick($SlidesOpts);
				if ($(window).width() > 1024) {
					mouseWheel($sliderHome);
				}
			}
		}
	};

	// -- Single -- //
	var $SingleScope = {

		// Constructor
		init: function init() {
			// Instance functions
			this.gallerySlider();
		},

		// scripts for banner
		gallerySlider: function gallerySlider() {
			var $SliderItems = $('.top-slider');
			var $SlidesOpts = {
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			};

			if ($SliderItems.length > 0) {
				$SliderItems.slick($SlidesOpts);
			}
		}
	};

	// Trigger
	$GeneralScope.init();

	// Home Scripts
	if ($('body').hasClass('home')) {
		$HomeScope.init();
	}

	// Single Scripts
	if ($('body').hasClass('single-post')) {
		$SingleScope.init();
	}
})(jQuery);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);