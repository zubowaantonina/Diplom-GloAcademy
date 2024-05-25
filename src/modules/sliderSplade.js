import Splide from "@splidejs/splide";
export const benefitsSplide = () => {
  const left = document.querySelector(".benefits__arrow--left");
  const right = document.querySelector(".benefits__arrow--right");

  const spide = new Splide(".benefits-splide", {
    pagination: false,
    arrows: false,
    perPage: 3,
    breakpoints: {
      576: {
        perPage: 1,
      },
    },
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
    pagination: false,
    arrows: false,
    perPage: 2,
    breakpoints: {
      576: {
        perPage: 1,
      },
    },
  }).mount();
  left.addEventListener("click", (e) => {
    spider.go('-1')
  });
  right.addEventListener("click", (e) => {
    spider.go('+1')
  });
 
}