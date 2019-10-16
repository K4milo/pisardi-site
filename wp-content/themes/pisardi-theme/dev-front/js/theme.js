(function($){

	const $GeneralScope = {

		// Constructor
		init: function() {
			this.menuScripts();
			this.wowInit();
		},

		wowInit: function(){
			new WOW().init();
		},

		// scripts for Menu
		menuScripts: function() { 
			
			let button_menu = $('.navbar-toggle');
			let header_el   = $('.navbar');	

			$(window).scroll(function() {

				let scroll      = $(window).scrollTop();
							

				if (scroll >= 100) {
					header_el.addClass("scroll_menu");
				} else {
					header_el.removeClass("scroll_menu");
				}
			});

			// Open menu trigger
			if(button_menu) {
				button_menu.on('click',  function(event) {
					event.preventDefault();
					/* Act on the event */
					header_el.toggleClass('open_menu');
					$('body').toggleClass('open');
				});
			}
		},
	}

	// -- Home -- //
	const $HomeScope = {

		// Constructor
		init: function() {
			// Instance functions
			this.loader();
			this.homeSlider();
		},

		// Loader
		loader: function(){ 

			let LogoSource = $('#logo-svg');

			if(LogoSource.length) {

				new Vivus('logo-svg', {
					duration: 50,
					file: '/wp-content/themes/pisardi-theme/images/logo-gold.svg',
					start: 'autostart',
					onReady: function (myVivus) {
						// `el` property is the SVG element
						//myVivus.el.setAttribute('height', "auto");
					}
				});
			}

			setTimeout(function(){
		        $('body').addClass('loaded');
		    }, 1680);
		},

		// scripts for banner
		homeSlider: function() {
			let $SliderWrapper = $('.hero-slider');
			let $SliderItems   = $SliderWrapper.find('.hero-slider__row');
			let $SlidesOpts = {
				fade: true,
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							infinite: true,
							dots: true
						}
					},
				]
			}

			if($SliderItems.length > 0) {
				let $sliderHome = $SliderWrapper.slick($SlidesOpts);
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
			let $SliderItems   = $('.top-slider');
			let $SlidesOpts = {
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}

			if($SliderItems.length > 0) {
				$SliderItems.slick($SlidesOpts);
			}
		},
	}

	// -- SingleProduct -- //
	const $SingleProductScope = {

		// Constructor
		init: function() {
			// Instance functions
			this.gallerySlider();
			this.relatedPost();
		},


		// scripts for banner
		gallerySlider: function() {
			let $SliderItems   = $('.project-top__gallery--wrapper');
			let $SlidesOpts = {
				fade: true,
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000
			}

			if($SliderItems.length > 0) {
				$SliderItems.slick($SlidesOpts);
			}
		},

		relatedPost: function() {
			let $PostItems   = $('.product__wrapper');
			let $Opts = {
				dots: false,
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				variableWidth: true
			}

			if($PostItems.length > 0) {
				$PostItems.slick($Opts);
			}
		},		
	}

	// Trigger 
	$GeneralScope.init();

	// Home Scripts
	if($('body').hasClass('home')) {
		$HomeScope.init();
	}

	// Single Scripts
	if($('body').hasClass('single-post')) {
		$SingleScope.init();
	}

	// Single Product Scripts
	if($('body').hasClass('single-proyectos')) {
		$SingleProductScope.init();
	}


})(jQuery);