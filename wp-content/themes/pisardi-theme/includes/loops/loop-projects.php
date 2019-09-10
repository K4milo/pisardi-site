<section id="Projects" class="projects">
	
	<?php if(have_posts()): while(have_posts()): the_post(); ?>
		<div class="projects__content">
			<div class="projects__content--text">
				<?php the_content(); ?>
			</div>
		</div>
	<?php endwhile;  endif; ?>
	
	<?php

	$args = array( 
		'post_type' => 'proyectos', 
		'posts_per_page' => -1
	);

	$query = new WP_Query( $args );?>

	<?php if($query->have_posts()): ?>
	<div class="projects__gallery">
	<?php while ( $query->have_posts() ) : $query->the_post(); 
			$post_id = get_the_ID();
		?>
		<article class="projects__gallery--item project-<?php echo $post_id; ?>">
			<a href="<?php the_permalink(); ?>">
				<figure class="projects__thumb" style="background-image: url('<?php the_post_thumbnail_url("full"); ?>');">
					<div class="glass-icon"></div>
				</figure>
				<div class="projects__gallery--item__caption">
					<header class="projects__gallery--item__caption-header">
						<span class="number"><?php the_field('project_number'); ?></span>
						<h3><?php the_title(); ?></h3>
					</header>
					<?php
						
						$terms = get_the_terms($post_id, 'tipo-proyecto');

						foreach( $terms as $term ): 
							// Name
							echo '<h5>'.$term->name.'</h5>';
						endforeach;
					?>
				</div>
			</a>
		</article>
	<?php endwhile; wp_reset_query(); endif; ?>
	</div>
</section>