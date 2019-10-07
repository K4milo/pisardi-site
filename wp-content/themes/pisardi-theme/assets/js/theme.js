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
		},

		// scripts for Menu
		menuScripts: function menuScripts() {

			var button_menu = $('.navbar-toggle');
			var header_el = $('.navbar');

			$(window).scroll(function () {

				var scroll = $(window).scrollTop();

				if (scroll >= 100) {
					header_el.addClass("scroll_menu");
				} else {
					header_el.removeClass("scroll_menu");
				}
			});

			// Open menu trigger
			if (button_menu) {
				button_menu.on('click', function (event) {
					event.preventDefault();
					/* Act on the event */
					header_el.toggleClass('open_menu');
					$('body').toggleClass('open');
				});
			}
		}
	};

	// -- Home -- //
	var $HomeScope = {

		// Constructor
		init: function init() {
			// Instance functions
			this.loader();
			this.homeSlider();
		},

		// Loader
		loader: function loader() {

			var LogoSource = $('#logo-svg');

			if (LogoSource.length) {

				new Vivus('logo-svg', {
					duration: 50,
					file: '/wp-content/themes/pisardi-theme/images/logo-gold.svg',
					start: 'autostart',
					onReady: function onReady(myVivus) {
						// `el` property is the SVG element
						//myVivus.el.setAttribute('height', "auto");
					}
				});
			}

			setTimeout(function () {
				$('body').addClass('loaded');
			}, 1680);
		},

		// scripts for banner
		homeSlider: function homeSlider() {
			var $SliderWrapper = $('.hero-slider');
			var $SliderItems = $SliderWrapper.find('.hero-slider__row');
			var $SlidesOpts = {
				fade: true,
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000,
				responsive: [{
					breakpoint: 1024,
					settings: {
						infinite: true,
						dots: true
					}
				}]
			};

			if ($SliderItems.length > 0) {
				var $sliderHome = $SliderWrapper.slick($SlidesOpts);
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

	// -- SingleProduct -- //
	var $SingleProductScope = {

		// Constructor
		init: function init() {
			// Instance functions
			this.gallerySlider();
			this.relatedPost();
		},

		// scripts for banner
		gallerySlider: function gallerySlider() {
			var $SliderItems = $('.project-top__gallery--wrapper');
			var $SlidesOpts = {
				fade: true,
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000
			};

			if ($SliderItems.length > 0) {
				$SliderItems.slick($SlidesOpts);
			}
		},

		relatedPost: function relatedPost() {
			var $PostItems = $('.product__wrapper');
			var $Opts = {
				dots: false,
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				variableWidth: true
			};

			if ($PostItems.length > 0) {
				$PostItems.slick($Opts);
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

	// Single Product Scripts
	if ($('body').hasClass('single-proyectos')) {
		$SingleProductScope.init();
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