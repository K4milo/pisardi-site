<?php if(have_posts()): while(have_posts()): the_post(); ?>
<section id="ContentBlog" class="content-blog">
	<header class="content-blog__header">
		<time  class="text-muted" datetime="<?php the_time('d-m-Y')?>"><?php the_time('j \d\e\ F \d\e\ Y '); ?></time>
		<h2><?php the_title(); ?></h2>
		<h3><span class="text-muted author"><?php _e('Por', 'bst'); echo " "; the_author() ?></span></h3>
	</header>
	<article class="content-blog__wrapper container">
		<?php the_content(); ?>
	</article>
</section>

<?php get_template_part('includes/general/slider', 'blogtop'); ?>

<?php
	$content = get_field('add_content');

	if($content):
?>

<section id="AddContentBlog" class="add-content-blog">
	<div class="container add-content-blog__wrapper">
		<?php echo $content; ?>		
	</div>
</section>

<?php 
	endif;
?>

<?php endwhile; ?>
<?php else: get_template_part('includes/loops/content', 'none'); ?>
<?php endif; ?>