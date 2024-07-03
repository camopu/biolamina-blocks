<?php

// enqueue block scripts and styles in the admin editor only
add_action('enqueue_block_editor_assets', function () {
    $DIR_URI = untrailingslashit(plugin_dir_url(__FILE__));
    $DIR = untrailingslashit(plugin_dir_path(__FILE__));

    $hooks_js_uri = $DIR_URI . '/index.js';
    $hooks_js_path = $DIR . '/index.js';

    if (file_exists($hooks_js_path)) {
        wp_enqueue_script(
            'custom-hooks-js',
            $hooks_js_uri,
            false,
            filemtime($hooks_js_path),
            true
        );
    }
});
