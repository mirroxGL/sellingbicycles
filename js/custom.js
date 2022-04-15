
// import Swiper styles
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

// import Swiper styles


// import Swiper and modules styles



const swiper = new Swiper('.text-slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   observer: true,
   observeParents: true,
   slidesPerView: 1,
   spaceBetween: 0,
   autoHeight: true,
   speed: 800,


   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },

});