<?php

function bst_enqueues() {

	/* Styles */
	
	wp_register_style('bootstrap-css', get_template_directory_uri() . '/css/bootstrap.min.css', false, '3.3.4', null);
	wp_enqueue_style('bootstrap-css');

  	wp_register_style('bst-css', get_template_directory_uri() . '/css/bst.css', false, null);
	wp_enqueue_style('bst-css');

	wp_register_style('main-css', get_template_directory_uri() . '/assets/css/theme.css', false, null);
	wp_enqueue_style('main-css');

	/* Scripts */
	
	wp_enqueue_script( 'jquery' );
	/* Note: this above uses WordPress's onboard jQuery. You can enqueue other pre-registered scripts from WordPress too. See:
	https://developer.wordpress.org/reference/functions/wp_enqueue_script/#Default_Scripts_Included_and_Registered_by_WordPress */

  	wp_register_script('modernizr', get_template_directory_uri() . '/js/modernizr-2.8.3.min.js', false, null, true);
	wp_enqueue_script('modernizr');

  	wp_register_script('bootstrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', false, null, true);
	wp_enqueue_script('bootstrap-js');

	wp_register_script('bst-js', get_template_directory_uri() . '/js/bst.js', false, null, true);
	wp_enqueue_script('bst-js');

	wp_register_script('slick-js', get_template_directory_uri() . '/assets/js/vendors/slick/slick.js', false, null, true);
	wp_enqueue_script('slick-js');

	wp_register_script('wow-js', get_template_directory_uri() . '/assets/js/vendors/wow/wow.js', false, null, true);
	wp_enqueue_script('wow-js');

	wp_register_script('vivus-js', get_template_directory_uri() . '/assets/js/vendors/vivus/vivus.min.js', false, null, true);
	wp_enqueue_script('vivus-js');

	wp_register_script('main-js', get_template_directory_uri() . '/assets/js/theme.js', false, null, true);
	wp_enqueue_script('main-js');

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'bst_enqueues', 9);


add_filter('style_loader_tag', 'codeless_remove_type_attr', 10, 2);
add_filter('script_loader_tag', 'codeless_remove_type_attr', 10, 2);

function codeless_remove_type_attr($tag, $handle) {
    return preg_replace( "/type=['\"]text\/(javascript|css)['\"]/", '', $tag );
}
