const slider = () => {
  const slides = document.querySelectorAll(".service-item");
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  let mediaQuery = window.matchMedia("(min-width: 576px)");

  let currentSlide = 0;

  let prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
    elems[index + 1].classList.remove(strClass);
  };
  let nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
    elems[index + 1].classList.add(strClass);
  };

  arrowRight.addEventListener("click", () => {
    prevSlide(slides, currentSlide, "service-item-active");
    currentSlide++;
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "service-item-active");
  });
  arrowLeft.addEventListener("click", () => {
    prevSlide(slides, currentSlide, "service-item-active");

    currentSlide--;
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 2;
    }

    nextSlide(slides, currentSlide, "service-item-active");
  });
};
export default slider;
