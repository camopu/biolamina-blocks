// editor
import ServerSideRender from "@wordpress/server-side-render";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { Disabled, PanelBody, SelectControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";

const DEFAULT_VIEWS = [
  {
    label: "-",
    value: "",
    default: true,
  },
];

export default function Edit(props) {
  const { attributes, setAttributes, name: blockName } = props;
  const { view } = attributes;

  const [viewOptions, setviewOptions] = useState(DEFAULT_VIEWS);

  useEffect(() => {
    setviewOptions([
      ...DEFAULT_VIEWS,
      ...(window.CUSTOM_VIEW_OPTIONS ? window.CUSTOM_VIEW_OPTIONS : []),
    ]);
  }, []);

  const inspectorControls = (
    <InspectorControls>
      <PanelBody title="View" initialOpen>
        <SelectControl
          label="Select View"
          value={view}
          options={viewOptions}
          onChange={(value) => {
            setAttributes({ view: value });
          }}
        />
      </PanelBody>
    </InspectorControls>
  );

  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      {inspectorControls}
      <Disabled>
        <ServerSideRender block={blockName} attributes={attributes} />
      </Disabled>
    </div>
  );
}
