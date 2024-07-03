// editor
import ServerSideRender from "@wordpress/server-side-render";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { Disabled, PanelBody, TextareaControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes, name: blockName } = props;
  const { shortCode } = attributes;
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Shortcode" initialOpen>
          <TextareaControl
            help="enter shortcode here"
            value={shortCode}
            onChange={(value) => setAttributes({ shortCode: value })}
          />
        </PanelBody>
      </InspectorControls>
      <Disabled>
        <ServerSideRender block={blockName} attributes={{ ...attributes }} />
      </Disabled>
    </div>
  );
}
