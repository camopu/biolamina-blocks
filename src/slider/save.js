// Save
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import kebabCase from "lodash.kebabcase";

export default function save(props) {
  const { attributes } = props;
  const { isAutoplay, isShowArrows, isShowDots, isTimeLine } = attributes;

  const blockProps = useBlockProps.save();

  const dataAttributes = {};

  function createDataAttributes(name) {
    return `data-${kebabCase(name)}`;
  }

  if (isAutoplay) {
    dataAttributes[createDataAttributes("isAutoplay")] = isAutoplay;
  }

  if (isShowArrows) {
    dataAttributes[createDataAttributes("isShowArrows")] = isShowArrows;
  }

  if (isShowDots) {
    dataAttributes[createDataAttributes("isShowDots")] = isShowDots;
  }

  if (isTimeLine) {
    dataAttributes[createDataAttributes("isTimeLine")] = isTimeLine;
  }

  return (
    <div {...blockProps}>
      <div className="embla" {...dataAttributes}>
        <div className="embla__viewport">
          <div className="embla__container">
            <InnerBlocks.Content />
          </div>
        </div>

        {isShowArrows && (
          <>
            {/* <!-- Buttons --> */}
            <button className="embla__button embla__button--prev" type="button">
              <svg
                className="embla__button__svg"
                viewBox="137.718 -1.001 366.563 643.999"
              >
                <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
              </svg>
            </button>
            <button className="embla__button embla__button--next" type="button">
              <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
                <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
              </svg>
            </button>
          </>
        )}

        {isTimeLine && (
          <>
            {/* <!-- Buttons --> */}
            <button className="embla__button embla__button--prev" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="none"
              >
                <path
                  stroke="#FF6129"
                  d="m14.836 22.942-5.131-5.237a1 1 0 0 1-.001-1.4l5.132-5.246M24.98 17H9.037M1 17C1 8.163 8.163 1 17 1s16 7.163 16 16-7.163 16-16 16S1 25.837 1 17Z"
                />
              </svg>
            </button>
            <button className="embla__button embla__button--next" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="none"
              >
                <path
                  stroke="#FF6129"
                  d="m19.164 11.058 5.131 5.237a1 1 0 0 1 .001 1.4l-5.132 5.246M9.02 17h15.943M33 17c0 8.837-7.163 16-16 16S1 25.837 1 17 8.163 1 17 1s16 7.163 16 16Z"
                />
              </svg>
            </button>
          </>
        )}

        {isShowDots && (
          <>
            {/* <!-- Dots --> */}
            <div className="embla__dots" />

            <script type="text/template" id="embla-dot-template">
              <button
                className="embla__dot"
                type="button"
                aria-label="button"
              />
            </script>
          </>
        )}
      </div>
    </div>
  );
}
