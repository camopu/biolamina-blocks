// Entry file for block
import { registerBlockType } from "@wordpress/blocks";

// Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
import "./editor.scss";
import "./style.scss";

// Internal dependencies
import Edit from "./edit";

registerBlockType("biolamina2/render-shortcode", {
  edit: Edit,
});
