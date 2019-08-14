<?php 
	/* Loop Team
		about_team
			about_team_thumb
			about_team_name
			about_team_mail
			about_team_aditional
	*/
	$about_team = get_field('about_team');

	if($about_team):
?>
	<section id="TeamLoop" class="team">
		<?php 

		while(have_rows('about_team')): the_row();  

			$about_team_thumb = get_sub_field('about_team_thumb');
			$about_team_name = get_sub_field('about_team_name');
			$about_team_mail = get_sub_field('about_team_mail');
			$about_team_aditional = get_sub_field('about_team_aditional');
		?>

		<article class="team__item">
			<figure class="team__item-thumb">
				<img src="<?php echo $about_team_thumb; ?>" alt="<?php echo $about_team_name; ?>">
			</figure>
			<div class="team__item-text">
				<h3><?php echo $about_team_name; ?></h3>

				<?php if($about_team_mail):?>
					<a href="mailto:<?php echo $about_team_mail;?>" class="mail-link"><?php echo $about_team_mail;?></a>
				<?php endif;?>
				
				<div class="team__item-text__caption">
					<?php echo $about_team_aditional; ?>
				</div>
			</div>
		</article>

		<?php
		endwhile;
		?>
	</section>

<?php
	endif;