<section id="Post" class="posts">

	<?php

	$args = array( 
		'post_type' => 'post', 
		'posts_per_page' => 8
	);

	$query = new WP_Query( $args );?>

	<?php if($query->have_posts()): ?>
	<div class="posts__wrapper container">
		<?php while ( $query->have_posts() ) : $query->the_post(); 
				$post_id = get_the_ID();
			?>
			<article class="posts--item post-<?php echo $post_id; ?>">
				<a href="<?php the_permalink(); ?>">
					<figure class="post__thumb" style="background-image: url('<?php the_post_thumbnail_url("large"); ?>');">
					</figure>
					<div class="posts--item__caption">
						<header class="posts--item__caption-header">
							<h3><?php the_title(); ?></h3>
						</header>
						<?php
							the_excerpt();						
						?>
						<h4>
						    <em>
						        <time class="text-muted" datetime="<?php the_time('d-m-Y')?>"><span class="glyphicon glyphicon-time"></span> <?php the_time('j \d\e\ F \d\e\ Y') ?></time>
						    </em>
						</h4>
					</div>
				</a>
			</article>
		<?php endwhile; wp_reset_query(); 
		endif; ?>
	</div>
</section>