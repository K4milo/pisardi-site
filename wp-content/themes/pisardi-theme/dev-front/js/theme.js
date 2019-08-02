(function($){

	const $GeneralScope = {

		// Constructor
		init: function() {
			this.menuScripts();
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
	}

	// -- Home -- //
	const $HomeScope = {

		// Constructor
		init: function() {
			// Instance functions
			this.homeSlider();
			this.homePartners();
		},


		// scripts for banner
		homeSlider: function() {
			
		},

		homePartners: function() {
			
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