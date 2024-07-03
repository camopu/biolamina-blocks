// editor
import { __ } from "@wordpress/i18n";
import {
  InnerBlocks,
  useBlockProps,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";

const TEMPLATE = [];
const ALLOWED_BLOCKS = ["biolamina2/slider-item", "biolamina2/timeline-item"];

export default function Edit(props) {
  const { attributes, setAttributes } = props;

  const { isAutoplay, isShowArrows, isShowDots, isTimeLine } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Slider Settings")}>
          <ToggleControl
            checked={isAutoplay}
            label={__("Autoplay")}
            onChange={(value) => setAttributes({ isAutoplay: value })}
          />
          <ToggleControl
            checked={isShowArrows}
            label={__("Show Arrows")}
            onChange={(value) => setAttributes({ isShowArrows: value })}
          />
          <ToggleControl
            checked={isShowDots}
            label={__("Show Bullets")}
            onChange={(value) => setAttributes({ isShowDots: value })}
          />
          <ToggleControl
            checked={isTimeLine}
            label={__("Is TimeLine Block")}
            onChange={(value) => setAttributes({ isTimeLine: value })}
          />
        </PanelBody>
      </InspectorControls>

      <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
    </div>
  );
}
