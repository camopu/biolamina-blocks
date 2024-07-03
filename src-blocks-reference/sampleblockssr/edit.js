// editor
import ServerSideRender from "@wordpress/server-side-render";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit({ attributes }) {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <ServerSideRender
        block="biolamina2/sampleblockssr"
        attributes={attributes}
      />
    </div>
  );
}
