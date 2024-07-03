// editor
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  const blockProps = useBlockProps();
  return <p {...blockProps}>{__("Starter Block – hello from the editor!")}</p>;
}
