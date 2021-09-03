const scroll= window.scrollY;

document.querySelector('.side-notification').style.transform = `translateY(${scroll}px)`

window.addEventListener("scroll", ()=>{

    const scroll= window.scrollY;
    
    console.log(scroll)
    document.querySelector('.side-notification').style.transform = `translateY(${scroll}px)`
    
})


// Swiper JS
const swiper1 = new Swiper('.professional-slide-parent', {

    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    
        slidesPerView: 1,
});




const swiper2 = new Swiper('.create-meeting-section', {

  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,

  },
  pagination: {
    el: '.swiper-pagination',
  },
      slidesPerView: 1,
});




const swiper3 = new Swiper('.our-service-section', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
      slidesPerView: 1,
});


const service_button1 = document.querySelectorAll('.our-service-navigation span')[0].innerHTML="Service"
const service_button2 = document.querySelectorAll('.our-service-navigation span')[1].innerHTML="Shop"


const swiper4 = new Swiper('.social-media-section', {

  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
      slidesPerView: 1,
});



const swiper5 = new Swiper('.biggest-service-slide', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 358,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});



const swiper6 = new Swiper('.best-view-img-container', {

  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
      slidesPerView: 1,
});



const swiper7 = new Swiper('.best-view-section-slide', {

  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
      slidesPerView: 1,
});



const swiper8 = new Swiper('.whole-service-image-section', {

  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
      slidesPerView: 1,
});



const swiper9 = new Swiper('.payment-method-section-slider', {

  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
      slidesPerView: 1,
});



const swiper10 = new Swiper('.whole-service-image-section-slider', {

  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
      slidesPerView: 1,
});


const swiper11 = new Swiper('.bar-code-section-slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
      slidesPerView: 1,
});

















