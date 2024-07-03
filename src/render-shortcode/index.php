<?php
// Server-side rendering
function render_shortcode_cd($attributes)
{
	$shortCode = $attributes['shortCode'];

	if (empty($shortCode)) {
		return "enter shortcode";
	}

	$wrapper_attributes = get_block_wrapper_attributes();
	$content = do_shortcode($shortCode);

	$view = '';
	$view .= '<div ' . $wrapper_attributes . '>';
	$view .= 	$content;
	$view .= '</div>';

	return $view;
}

// PHP (server-side)
// register_block_type
if (function_exists("register_block_type")) {
	register_block_type(__DIR__, [
		"render_callback" => "render_shortcode_cd",
	]);
}
