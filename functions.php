
<?php

   function gearlLink_register_styles(){

      wp_enqueue_style('compiled-css', get_template_directory_uri() . "./websiteTemplate/dist/js-css/style.css", array(), '1.0', 'all');

   }

   add_action( 'wp_enqueue_scripts', 'gearlLink_register_styles')

?>