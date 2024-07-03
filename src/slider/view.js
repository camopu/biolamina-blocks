import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import {
  setupPrevNextBtns,
  disablePrevNextBtns,
  setupDotBtns,
  generateDotBtns,
  selectDotBtn,
} from "./js";

function sliderInit() {
  const sliderContainer = document.querySelectorAll(".embla");

  if (sliderContainer) {
    sliderContainer.forEach((wrap) => {
      const { isAutoplay, isShowArrows, isTimeLine, isShowDots } =
        wrap?.dataset || {};

      const OPTIONS = {
        loop: false,
        skipSnaps: false,
        align: 0,
        slidesToScroll: "auto", // 1
        // breakpoints: { "(min-width: 768px)": { loop: false } },
      };

      const autoplayOptions = {
        playOnInit: isAutoplay === "true",
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      };

      const autoplay = Autoplay(
        autoplayOptions,
        (emblaRoot) => emblaRoot.parentElement
      );

      const PLUGINS = [];
      PLUGINS.push(autoplay);

      const viewPort = wrap.querySelector(".embla__viewport");

      // create slider
      const embla = EmblaCarousel(viewPort, OPTIONS, PLUGINS);

      if (isShowArrows === "true" || isTimeLine === "true") {
        const prevBtn = wrap.querySelector(".embla__button--prev");
        const nextBtn = wrap.querySelector(".embla__button--next");

        const disablePrevAndNextBtns = disablePrevNextBtns(
          prevBtn,
          nextBtn,
          embla
        );
        embla.on("init", disablePrevAndNextBtns);
        embla.on("select", disablePrevAndNextBtns);

        setupPrevNextBtns(prevBtn, nextBtn, embla, autoplay);
      }

      if (isShowDots === "true") {
        const dots = wrap.querySelector(".embla__dots");

        const dotsArray = generateDotBtns(dots, embla, wrap);
        const setSelectedDotBtn = selectDotBtn(dotsArray, embla, autoplay);

        embla.on("init", setSelectedDotBtn);
        embla.on("select", setSelectedDotBtn);

        setupDotBtns(dotsArray, embla);
      }
    });
  }
}

/**
 * init
 */
document.addEventListener("DOMContentLoaded", () => {
  sliderInit();
});
