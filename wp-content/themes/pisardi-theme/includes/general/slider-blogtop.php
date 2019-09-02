<?php

/*
	Banner fields
		top_slider
			top_slider_img
			top_slider_txt
*/

$top_slider = get_field('top_slider');

if($top_slider): ?>
	<section id="topSlider" class="top-slider">
		<?php
			while(have_rows('top_slider')): the_row(); 
				$top_slider_img = get_sub_field('top_slider_img');
				$top_slider_txt = get_sub_field('top_slider_txt');			
		?>
		<div class="top-slider__row" style="background-image: url('<?php echo $top_slider_img; ?>')">
			<?php if($top_slider_txt): ?>
				<div class="top-slider__caption">
					<div class="content"><?php echo $top_slider_txt; ?></div>
				</div>
			<?php endif; ?>
		</div>		
		<?php endwhile; ?>
	</section>
<?php endif; ?>