<section class="pre-footer-widgets">
	<div class="container pre-footer-widgets__wrapper">
		<?php dynamic_sidebar('pre-footer-widget-area'); ?>
	</div>
</section>

<footer class="container-fluid site-footer"> 
	<div class="row site-footer-widgets">
		<?php dynamic_sidebar('footer-widget-area'); ?>
	</div>
	<div class="row site-footer-year">
		<div class="col-lg-12 site-sub-footer">
			<p>Todos los derechos reservados <a href="<?php echo home_url('/'); ?>"><?php bloginfo('name'); ?> / &copy; <?php echo date('Y'); ?></a></p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
