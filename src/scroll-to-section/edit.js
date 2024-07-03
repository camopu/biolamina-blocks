// editor
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      {__("Scroll to Section, add 'id' in block settings")}
    </div>
  );
}
