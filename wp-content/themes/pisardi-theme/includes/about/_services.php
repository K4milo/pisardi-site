<?php 
	/* Loop services
		about_services
			about_services_img
			about_services_name
			about_services_txt
	*/
		$about_services = get_field('about_services');

		if($about_services):
	?>
		<section id="ServicesLoop" class="services">

			<header class="services__top">
				<h2>Nuestros<br/>Servicios</h2>
			</header>

			<div class="services__wrapper">
				<?php 

				while(have_rows('about_services')): the_row();  

					$about_services_img = get_sub_field('about_services_img');
					$about_services_name = get_sub_field('about_services_name');
					$about_services_txt = get_sub_field('about_services_txt');
				?>

				<article class="services__item">
					<figure class="services__item-thumb">
						<img src="<?php echo $about_services_img; ?>" alt="<?php echo $about_services_name; ?>">
					</figure>
					<div class="services__item-text">
						<h3><?php echo $about_services_name; ?></h3>
						
						<div class="services__item-text__caption">
							<?php echo $about_services_txt; ?>
						</div>
					</div>
				</article>

				<?php
				endwhile;
				?>
			</div>

		</section>

	<?php
		endif;