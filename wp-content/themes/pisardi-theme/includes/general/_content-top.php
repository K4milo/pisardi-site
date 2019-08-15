<?php if(have_posts()): while(have_posts()): the_post(); ?>
<section id="ContentPage" class="content-deault">
	<article class="content-deault__wrapper container">
		<?php the_content(); ?>
	</article>
</section>
<?php endwhile; ?>
<?php else: get_template_part('includes/loops/content', 'none'); ?>
<?php endif; ?>