// Entry file for block
import { registerBlockType } from "@wordpress/blocks";

// Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
import "./editor.scss";
import "./style.scss";

// Internal dependencies
import Edit from "./edit";
import save from "./save";

registerBlockType("biolamina2/slider-item", {
  edit: Edit,
  save,
});
