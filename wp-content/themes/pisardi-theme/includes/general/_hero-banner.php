<?php $image_url_main = get_the_post_thumbnail_url('full'); ?>
<section id="HeroBanner" class="hero-banner" style="background-image: url(<?php echo $image_url_main; ?>)">
	<div class="hero-banner__caption">
		<?php the_content(); ?>
	</div>
</section>