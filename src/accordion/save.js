// Save
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
  const { attributes } = props;
  const { accordionTitle } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <details>
        <summary>{accordionTitle}</summary>
        <InnerBlocks.Content />
      </details>
    </div>
  );
}
