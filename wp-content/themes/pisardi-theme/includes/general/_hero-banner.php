<?php if(have_posts()): while(have_posts()): the_post();  

	$image_url_main = get_the_post_thumbnail_url(get_the_ID(),'full'); ?>
	
	<section id="HeroBanner" class="hero-banner" style="background-image: url(<?php echo $image_url_main; ?>)">
		<div class="hero-banner__caption">
			<?php the_content(); ?>
		</div>
	</section>

<?php endwhile; endif; ?>