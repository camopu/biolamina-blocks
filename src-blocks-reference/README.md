# blocks in this folder are for reference

## how to create examples for blocks

While in editor select the block and run the code snippet

```js
wp.data.select("core/block-editor").getSelectedBlock();
```

```jsonc
// block.json
  "example": {
    "attributes": {
      "backgroundColor": "#9fc054",
    }
  }
```

```php
// add external scripts
   // add external assets timeline
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/timeline/index.asset.php');

    wp_register_script(
      'biolamina2-timeline-view-script',
      plugins_url('assets/hammer.min.js', __FILE__),
      $asset_file['dependencies'],
      $asset_file['version']
    );
```
