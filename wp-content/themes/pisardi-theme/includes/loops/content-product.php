<?php

	/*
		Fields
			project_gallery
				project_gallery_img
				project_gallery_txt
	
	*/

	$project_gallery = get_field('project_gallery');
	$project_number = get_field('project_number');
	$gallery_text_top = get_field('gallery_text_top');

	if(have_posts()): while(have_posts()): the_post();
?>
	<article role="article" id="post_<?php the_ID()?>" <?php post_class()?>>
		<div class="project-top">
			<div class="project-top__content">
				<div class="project-top__content--inner">
					<h2><?php the_title(); ?></h2>
					<?php the_content(); ?>
					<span class="number"><?php echo $project_number ?></span>
				</div>
				<div class="project-footer hidden-xxs">
					<a href="/proyectos/">Volver a proyectos</a>
				</div>
			</div>
			<?php if($project_gallery): ?>
				<div class="project-top__gallery">
					<div class="project-top__gallery--wrapper">
						<?php while(have_rows('project_gallery')):the_row();

							$project_gallery_img = get_sub_field('project_gallery_img');
							$project_gallery_txt = get_sub_field('project_gallery_txt');
							$size = 'large';
							$thumb = $project_gallery_img['sizes'][$size];
						?>
						<div class="project-top__gallery--item">
							<figure class="project-top__gallery--item__photo" style="background-image: url(<?php echo $thumb; ?>)"></figure>
						</div>
						<?php endwhile; ?>


						<?php /* if($gallery_text_top): ?>
							<div class="project-top__gallery--item__text">
								<?php echo $gallery_text_top; ?>
							</div>
						<?php endif; */?>
					</div>
				</div>
			<?php endif; ?>
		</div>		
	</article>
	<div class="project-footer visible-xxs">
		<a href="/proyectos/">Volver a proyectos</a>
	</div>

<?php endwhile; endif; 