// Save
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
  const blockProps = useBlockProps.save();
  return (
    <p {...blockProps}>{__("Starter Block – hello from the saved content!")}</p>
  );
}
