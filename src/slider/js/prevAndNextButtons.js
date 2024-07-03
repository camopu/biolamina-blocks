const setupPrevNextBtns = (prevBtn, nextBtn, embla, autoplay) => {
  const scrollPrev = () => {
    autoplay.reset();
    embla.scrollPrev();
  };

  const scrollNext = () => {
    autoplay.reset();
    embla.scrollNext();
  };

  prevBtn.addEventListener("click", scrollPrev, false);
  nextBtn.addEventListener("click", scrollNext, false);
};

const disablePrevNextBtns = (prevBtn, nextBtn, embla) => () => {
  if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
  else prevBtn.setAttribute("disabled", "disabled");

  if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
  else nextBtn.setAttribute("disabled", "disabled");
};

export { setupPrevNextBtns, disablePrevNextBtns };
