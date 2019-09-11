<?php

/*
	Banner fields
		hero_slider
			hero_slider_img
			hero_slider_txt
			hero_slider_btn
*/

$hero_slider = get_field('hero_slider');

if($hero_slider): ?>
	<div class="loader">
		<h1 id="logo-svg" class="loader__logo">Pisardi Arquitectos</h1>
	</div>
	<section id="HeroSlider" class="hero-slider">
		<?php
			while(have_rows('hero_slider')): the_row(); 
				$hero_slider_img = get_sub_field('hero_slider_img');
				$hero_slider_title = get_sub_field('hero_slider_title');
				$hero_slider_txt = get_sub_field('hero_slider_txt');
				$hero_slider_btn = get_sub_field('hero_slider_btn');
				$hero_slider_btn_txt = get_sub_field('hero_slider_btn_txt');				
		?>
		<div class="hero-slider__row" style="background-image: url('<?php echo $hero_slider_img; ?>')">
			<?php if($hero_slider_txt): ?>
				<div class="hero-slider__caption">
					<h3><?php echo $hero_slider_title; ?></h3>
					<div class="content"><?php echo $hero_slider_txt; ?></div>
					<?php if($hero_slider_btn): ?>
						<a href="<?php echo $hero_slider_btn; ?>"><?php echo $hero_slider_btn_txt; ?></a>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		</div>		
		<?php endwhile; ?>
	</section>
<?php endif; ?>
