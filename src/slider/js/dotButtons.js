const generateDotBtns = (dots, embla, wrap) => {
  const dotsLocal = dots;

  const template = wrap.querySelector("#embla-dot-template").innerHTML;
  dotsLocal.innerHTML = embla
    .scrollSnapList()
    .reduce((acc) => acc + template, "");
  return [].slice.call(dotsLocal.querySelectorAll(".embla__dot"));
};

const setupDotBtns = (dotsArray, embla) => {
  dotsArray.forEach((dotNode, i) => {
    dotNode.addEventListener("click", () => embla.scrollTo(i), false);
  });
};

const selectDotBtn = (dotsArray, embla, autoplay) => () => {
  autoplay.reset();

  const previous = embla.previousScrollSnap();
  const selected = embla.selectedScrollSnap();
  dotsArray[previous].classList.remove("is-selected");
  dotsArray[selected].classList.add("is-selected");
};

export { setupDotBtns, generateDotBtns, selectDotBtn };
