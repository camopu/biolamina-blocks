// editor
import { __ } from "@wordpress/i18n";
import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { accordionTitle, isOpen } = attributes;
  const blockProps = useBlockProps();

  const handleClick = (e) => {
    e.preventDefault();
    setAttributes({ isOpen: !isOpen });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Slider Settings")}>
          <ToggleControl
            checked={isOpen}
            label={__("Open Accordion")}
            onChange={(value) => setAttributes({ isOpen: value })}
          />
        </PanelBody>
      </InspectorControls>

      <details open={isOpen}>
        <summary onClick={handleClick}>{accordionTitle}</summary>
        <TextControl
          label={__("Accordion Title")}
          maxLength={180}
          value={accordionTitle}
          onChange={(value) => setAttributes({ accordionTitle: value })}
          placeholder={__("Accordion Title")}
        />
        <InnerBlocks
          template={[["core/paragraph", { placeholder: "Add content..." }]]}
        />
      </details>
    </div>
  );
}
