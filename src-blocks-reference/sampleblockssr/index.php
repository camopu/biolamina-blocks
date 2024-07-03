<?php
// Server-side rendering
function sampleblockssr_cd($attributes = [], $content, $block)
{

  $wrapper_attributes = get_block_wrapper_attributes();

  $view = <<<HTML
<div $wrapper_attributes>Server-side rendering</div>
HTML;

  return $view;
}


// PHP (server-side)
// register_block_type
if (function_exists("register_block_type")) {
  register_block_type(__DIR__, [
    "render_callback" => "sampleblockssr_cd",
  ]);
}
