// editor
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  const blockProps = useBlockProps({ className: "embla__slide" });
  return (
    <div {...blockProps}>
      <InnerBlocks />
    </div>
  );
}
