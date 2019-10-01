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
			$about_team_linkedin = get_sub_field('about_team_linkedin');
		?>

		<article class="team__item">
			<figure class="team__item-thumb" style="background-image: url('<?php echo $about_team_thumb; ?>')"></figure>
			<div class="team__item-text">
				<div class="team__item-text__caption">
					<h3><?php echo $about_team_name; ?></h3>
					<?php echo $about_team_aditional; ?>
					<ul class="team__item-text__caption--links">
						<?php if($about_team_linkedin):?>
							<li><a href="<?php echo $about_team_linkedin; ?>" class="in-link" target="_blank">LinkedIn</a></li>
						<?php endif;?>
						<?php if($about_team_mail):?>
							<li><a href="mailto:<?php echo $about_team_mail; ?>" class="mail-link"><?php echo $about_team_mail;?></a></li>
						<?php endif;?>
					</ul>				
				</div>
			</div>
		</article>

		<?php
		endwhile;
		?>
	</section>

<?php
	endif;