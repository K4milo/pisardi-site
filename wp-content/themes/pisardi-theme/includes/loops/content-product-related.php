<?php
global $post;


$args = array( 
	'post_type' => 'proyectos', 
	'posts_per_page' => -1,
	'post__not_in' => array( $post->ID )
);

$query = new WP_Query( $args );

if($query->have_posts()): ?>
	<section id="ProductsRelated" class="product internal">
		<div class="product__wrapper">
		<?php while ( $query->have_posts() ) : $query->the_post(); 
			$slug = get_post_field( 'post_name', get_the_ID() );
		?>
			<article class="product__wrapper--item">
				<a href="<?php the_permalink(); ?>">
					<figure class="product__thumb" style="background-image: url('<?php the_post_thumbnail_url("full"); ?>');">
						<h3><?php the_title(); ?></h3>
					</figure>
				</a>
			</article>
		<?php endwhile; wp_reset_query(); ?>
		</div>
	</section>
<?php endif; ?>