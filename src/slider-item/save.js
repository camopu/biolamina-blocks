// Save

import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save() {
  const blockProps = useBlockProps.save({ className: "embla__slide" });
  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
