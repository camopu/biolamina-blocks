<?php

/**
 * // NOTES
 * add views in theme
 * packages/themes/scilifelab2022/inc/customviews/index.php
 */

/**
 * Server-side rendering
 */
function customviews_cb($attributes = [])
{

  // VIEWS
  $selectedView = $attributes['view'];

  /**
   * add | update views
   * packages/plugins/scilifelab2022-blocks/src/customviews
   */
  if (function_exists($selectedView)) {
    $view = $selectedView($attributes);
  } else {
    $view = "<div>view not selected</div>";
  }

  // Reset Post Data
  wp_reset_postdata();
  return $view;
}

// PHP (server-side)
// register_block_type
if (function_exists("register_block_type")) {
  register_block_type(__DIR__, [
    "render_callback" => "customviews_cb",
  ]);
}
