<?php

/**
 * Plugin Name:       Biolamina2 Plugin
 * Description:       Blocks for biolamina Theme.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            AlexAkimchenko
 * License:
 * License URI:
 * Text Domain:       biolamina2
 *
 * @package           biolamina2
 */

if (!defined('ABSPATH')) {
  die('Silence is golden.');
}

// init
biolamina_pre_init();

function blockplugin_build_files_notice()
{
  echo '<div class="error"><p>';
  _e(
    'Add a block and build, Blockplugin requires files to be built. Run <code>yarn install</code> to install dependencies, <code>yarn build</code> to build the files or <code>yarn start</code> to build the files and watch for changes.',
    'biolamina2'
  );
  echo '</p></div>';
}

function biolamina_pre_init()
{
  if (!file_exists(__DIR__ . '/build')) {
    add_action('admin_notices', 'blockplugin_build_files_notice');
    return;
  }

  /*  Register all blocks and scripts */
  add_action('init', function () {
    $DIR = untrailingslashit(plugin_dir_path(__FILE__));

    // include inc file
    $inc_index_file = "$DIR/inc/index.php";

    if (file_exists($inc_index_file)) {
      include_once $inc_index_file;
    }

    // Registers the block using the metadata loaded from the `block.json` file.
    $build_blocks_path = "$DIR/build";
    $block_list = scandir($build_blocks_path);

    foreach ($block_list as $item) {
      if ($item == '..' || $item == '.') {
        continue;
      }
      if (is_dir($build_blocks_path . '/' . $item)) {
        $filename = "$build_blocks_path/$item/index.php";
        if (file_exists($filename)) {
          include_once  $filename;
        }
      }
    }
  });
}
