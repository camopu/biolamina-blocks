<?php
// Hooks add category for blocks
add_filter(
  'block_categories_all',
  function ($categories) {
    return array_merge($categories, [
      [
        'slug' => 'biolamina2',
        'title' => __('biolamina2', 'biolamina2'),
      ],
    ]);
  },
  10,
  2
);

/**
 * add versions to wp_block
 */
add_action('init', function () {
  add_post_type_support('wp_block', ['revisions']);
  add_post_type_support('wp_navigation', ['revisions']);
  add_post_type_support('page', 'excerpt');
});

/**
 * add admin menu
 */
add_action('admin_menu', function () {

  // add reusable blocks
  add_menu_page(
    'Reusable Blocks',
    'Reusable Blocks',
    'read',
    'edit.php?post_type=wp_block',
    '',
    'dashicons-block-default',
    21
  );


  // show available menu
  add_theme_page(
    'Navigation Block',
    'Navigation Block',
    'read',
    'edit.php?post_type=wp_navigation',
    '',
    21
  );
});


if (!function_exists('get_attachment_details_by_slug')) {

  // get images from uploads folder
  function get_attachment_details_by_slug($slug = "")
  {
    $args = [
      "post_type" => "attachment",
      "name" => sanitize_title($slug),
      "posts_per_page" => 1,
      "post_status" => "inherit",
    ];
    $post_List = get_posts($args);
    $first_post = $post_List ? array_pop($post_List) : null;

    $data = [
      "ID" => $first_post->ID,
      "url" => $first_post ? wp_get_attachment_url($first_post->ID) : "",
    ];

    return $data;
  }

  /*
  $person_url = '';
  if (function_exists('get_attachment_details_by_slug')) {
      $person_url = get_attachment_details_by_slug('person')['url'];
  }
  $featured_image_container .= "<img class='image-placeholder' src='$person_url' alt='person icon'>";
  */

  /*
  <style>
    .cta-block {
      background-image: url('<?php echo get_attachment_details_by_slug('cta')['url'] ?>');
    }
  </style>
*/
}
