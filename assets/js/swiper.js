// document.addEventListener('DOMContentLoaded', function () {
//   const card = new CardSlider();
// });

// class CardSlider {
//   constructor() {
//     this.swiper = new Swiper('.swiper-container', {
//       // Optional parameters
//       loop: true,
//       // spaceBetween: 56,
//       autoHeight: true,
//       // centeredSlides: true,
//       // slidesPerView: 1,
//       speed: 500,
//       // grabCursor: true,
//       // breakpoints: {
//       //   640: {
//       //     slidesPerView: 2
//       //   },
//       //   960: {
//       //     slidesPerView: 4
//       //   },
//       // },
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false
//       },

//       pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//       },
//     });
//   }
// }

let mySwiper = new Swiper('.swiper-container', {
  loop: true, //ループ可能（ループモードを有効に）
  slidesPerView: 1, //スライドを2つ（分）表示
  autoHeight: true,
  allowTouchMove: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },

  pagination: { //ページネーションを表示
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true, //アイコンをクリックすると対応するスライドに移動
  },

})