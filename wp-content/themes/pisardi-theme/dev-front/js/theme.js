(function($){

	const $GeneralScope = {

		// Constructor
		init: function() {
			this.menuScripts();
			this.svgScripts();
		},

		// scripts for Menu
		menuScripts: function() { 
			$(window).scroll(function() {

				let scroll    = $(window).scrollTop();
				let header_el = $('.navbar');

				if (scroll >= 100) {
					header_el.addClass("scroll_menu");
				} else {
					header_el.removeClass("scroll_menu");
				}
			});
		},

		// scripts for SVG Animations
		svgScripts: function() {
			let LogoSource = $('#logo-svg');
			if(LogoSource.length) {
				new Vivus('logo-svg', {
					file: '/wp-content/themes/pisardi-theme/images/logo.svg',
					onReady: function (myVivus) {
					// `el` property is the SVG element
						//myVivus.el.setAttribute('height', 'auto');
					}
				});
			}			
		},
	}

	// -- Home -- //
	const $HomeScope = {

		// Constructor
		init: function() {
			// Instance functions
			this.homeSlider();
		},


		// scripts for banner
		homeSlider: function() {
			let $SliderWrapper = $('.hero-slider');
			let $SliderItems   = $SliderWrapper.find('.hero-slider__row');
			let $SlidesOpts = {
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: true,
				lazyLoad: 'ondemand',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							vertical: false,
							infinite: true,
							dots: true
						}
					},
				]
			}

			function mouseWheel($slider) {
				$(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
			}

			function mouseWheelHandler(event) {
				event.preventDefault()
				const $slider = event.data.$slider
				const delta = event.originalEvent.deltaY
				if(delta < 0) {
					$slider.slick('slickPrev')
				}
				else {
					$slider.slick('slickNext')
				}
			}

			if($SliderItems.length > 0) {
				let $sliderHome = $SliderWrapper.slick($SlidesOpts);
				if($(window).width() > 1024){
					mouseWheel($sliderHome);
				}
			}
		},
	}

	// -- Single -- //
	const $SingleScope = {

		// Constructor
		init: function() {
			// Instance functions
			this.gallerySlider();
		},


		// scripts for banner
		gallerySlider: function() {
			let $SliderWrapper = $('.gallery-slider');
			let $SliderItems   = $SliderWrapper.find('.gallery-slider__row');
			let $SlidesOpts = {
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: true
			}

			if($SliderItems.length > 0) {
				$SliderWrapper.slick($SlidesOpts);
			}
		},
	}

	// Trigger 
	$GeneralScope.init();

	// Home Scripts
	if($('body').hasClass('home')) {
		$HomeScope.init();
	}

})(jQuery);