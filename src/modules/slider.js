// export const swiperBenefits = () => {
 
//     const benefitsSwiper = new Swiper('.swiperBenefits', {
//         speed: 400,
//         slidesPerView: 1,
//         // spaceBetweenSlides: 10,
//         breakpoints: {
//             320:{
//                 slidesPerView: 3, 
//             },
//             576: {
//                 slidesPerView: 3,
                
//             }
//         },
//         navigation: {
//             nextEl: ".benefits__arrow--right",
//             prevEl: ".benefits__arrow--left",
//         }
//     });
// }

export const swiperServices = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    speed: 400,
    //   spaceBetween: 30,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
    },
  });
};
