import Splide from "@splidejs/splide";

Splide.defaults = {
  pagination: false,
  arrows: false,
  breakpoints: {
    576: {
      perPage: 1,
    }
  }
}

export const benefitsSplide = () => {
  const left = document.querySelector(".benefits__arrow--left");
  const right = document.querySelector(".benefits__arrow--right");
  const spide = new Splide(".benefits-splide", {
    perPage: 3,
  }).mount();
  left.addEventListener("click", (e) => {
    spide.go('-1')
  });
  right.addEventListener("click", (e) => {
    spide.go('+1')
  });
};

export const serviceSplide=()=>{
  const left = document.querySelector(".services__arrow--left");
  const right = document.querySelector(".services__arrow--right");
  const spider = new Splide(".service-splide", {
    perPage: 2,
  }).mount();
  left.addEventListener("click", (e) => {
    spider.go('-1')
  });
  right.addEventListener("click", (e) => {
    spider.go('+1')
  });
 
}