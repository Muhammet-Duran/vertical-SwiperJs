new Swiper(".swiper-container", {
  loop:true,
  direction: 'vertical',
  simulateTouch: true,
  pagination:{
      el:'.swiper-pagination',
      type:'progressbar'
  },
  navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
  },
 
  

})