<?php 
$slider_bottom = get_field('slider_bottom');

if($slider_bottom):
?>
<section id="bottomSlider" class="bottom-slider">
	<?php
	while(have_rows('slider_bottom')):the_row();
		$slider_bottom_image = get_sub_field('slider_bottom_image');
		$slider_bottom_txt   = get_sub_field('slider_bottom_txt');
	?>

	<div class="bottom-slider__row" style="background-image: url('<?php echo $slider_bottom_image; ?>')">
		<?php if($slider_bottom_txt): ?>
			<div class="bottom-slider__caption">
				<div class="content"><?php echo $slider_bottom_txt; ?></div>
			</div>
		<?php endif; ?>
	</div>	
		
	<?php
	endwhile;
	?>
</section>
<?php
endif;