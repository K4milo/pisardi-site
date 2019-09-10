<?php

// Custom post types creation
function create_posttype() {

	 ////////////////////
	// POST TYPES
	///////////////////

	//Post Type Proyectos

	register_post_type( 'proyectos',
		// CPT Options
		array(
			'labels' => array(
				'name' => __( 'Proyectos' ),
				'singular_name' => __( 'Proyecto')
			),
			'rewrite' => array('slug' => 'proyecto'),
			'supports' => array( 'title', 'thumbnail', 'editor', 'custom-fields','excerpt'),
			'public' => true,
			'hierarchical'        => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'menu_position'       => 5,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post'
		)
	);

	////////////////////
	// TAXONOMY
	///////////////////

	$media_labels_projs = array(
	    'name' => _x( 'Tipo de proyecto', 'Tipos de proyecto' ),
	    'singular_name' => _x( 'Tipo', 'tipo' ),
	    'search_items' =>  __( 'Buscar Tipo de proyecto' ),
	    'all_items' => __( 'Todas los tipo de proyecto' )
	); 

	register_taxonomy('tipo-proyecto',array('proyectos'), array(
	    'hierarchical' => true,
	    'labels' => $media_labels_projs,
	    'show_ui' => true,
	    'show_admin_column' => true,
	    'show_in_rest' => true,
	    'rest_base' => 'tipo-proyecto',
	    'query_var' => true,
	    'rewrite' => array( 'slug' => 'tipo-proyecto')
	)); 

}

// Hooking up our function to theme setup
add_action( 'init', 'create_posttype' );