# placeholder

## Attributes

- https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/
- https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/

```jsonc
// block.json
{
  "editorScript": "file:./index.js",
  "script": "file:./view.js",
  "editorStyle": "file:./editor.css",
  "style": "file:./style.css"
}
```

```php
// register block
// register_block_type
if (function_exists('register_block_type')) {
	register_block_type(__DIR__, []);
}

// ssr
// Server-side rendering
function sampleblockssr_cd($attributes = [], $content, $block)
{
    $view = <<<HTML
<p>Server-side rendering</p>
HTML;
    return $view;
}

// PHP (server-side)
// register_block_type
if (function_exists('register_block_type')) {
    register_block_type(__DIR__, [
        'render_callback' => 'sampleblockssr_cd',
    ]);
}

```

```s
# types
null
boolean
object
array
string
integer
enum: [ "large", "small" ]
```

```jsonc
// attributes example
{
  "url": {
    "type": "string",
    "source": "attribute",
    "selector": "img",
    "attribute": "src"
  },
  "title": {
    "type": "string"
  },
  "size": {
    "enum": ["large", "small"]
  },
  "cover": {
    "type": "string",
    "source": "attribute",
    "selector": "img",
    "attribute": "src"
  },
  "author": {
    "type": "string",
    "source": "html",
    "selector": ".book-author"
  }
}
```

## supports

```jsonc
{
  "supports": {
    "anchor": true,
    "alignWide": true,
    "align": ["left", "center", "right", "wide", "full"], // align: true,
    "className": true, // Remove the support for the generated className.,
    "customClassName": true, // Remove the support for the custom className.
    "supports": {
      "color": {
        "text": true,
        "background": true,
        "gradients": true,
        "link": true
      }
    },
    "defaultStylePicker": false, // Remove the Default Style picker.
    "fontSize": false, // Enable UI control for font-size.
    "html": false, // Remove support for an HTML mode.
    "inserter": true, // Hide this block from the inserter.
    "lineHeight": false, // Enable UI control for line-height.
    "multiple": true, // Use the block just once per post
    "reusable": true, // Don't allow the block to be converted into a reusable block.
    "spacing": {
      "margin": false, // [ "top", "bottom", "left","right" ]
      "padding": false // [ "top", "bottom", "left","right" ]
    }
  }
}
```

```jsonc
// Block Styles
{
  "styles": [
    { "name": "default", "label": "Default", "isDefault": true },
    { "name": "other", "label": "Other" }
  ]
}
```

```jsonc
// example block preview
{
  "example": {
    "content": "This is a notice!",
    "viewportWidth": 800
  }
}
```
