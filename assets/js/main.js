
var swiper = new Swiper(".MainSwiper", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var serviceSlider = new Swiper(".services-slider", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".service-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"><span class="text">' + (index + 1) + "</span></span>";
    },
  },
});

serviceSlider.on('slideChange', function () {
  var serviceIMG1 = $('.services-slider .swiper-slide-active .content').attr('data-img1');
  var serviceIMG2 = $('.services-slider .swiper-slide-active .content').attr('data-img2');
  $('.sample-img1').attr('src', serviceIMG1);
  $('.sample-img2').attr('src', serviceIMG2);
});



$('.language').click(function () {
  $(this).find(".dropdown").toggleClass("active");
});
document.querySelector('.language').addEventListener('click', function (e) {
  e.preventDefault();
});



$('.navigation-menu-button').click(function () {
  $(this).find('.navigation-open-btn').toggleClass("active");
  $(this).find('.navigation-open-btn').find('span').toggleClass("active");
  $(this).find('.navigation-open-btn').find('.navigation-open-btn-name').toggleClass('active');
  $(this).toggleClass('active');
  $('.navigation-menu').toggleClass('active');
});

var swiper = new Swiper(".quality-policy-slider", {
  slidesPerView: 1,
  watchSlidesProgress: true,
  effect: 'fade',
});
var quality_policy_slider_2 = new Swiper(".quality-policy-slider-2", {
  spaceBetween: 10,
  slidesPerView: 1.5,
  loop: true,
  thumbs: {
    swiper: swiper,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5
    },
    375: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2.2
    },
    600: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 1.5
    },
    992: {
      slidesPerView: 1.5
    }
  },
});
var brands_slider = new Swiper(".brands-slider", {
  spaceBetween: 10,
  loop: 'true',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    375: {
      slidesPerView: 2
    },
    425: {
      slidesPerView: 2.5

    },
    480: {
      slidesPerView: 3
    },
    600: {
      slidesPerView: 3.5
    },
    900: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 6
    },
  },
});

var about_slider = new Swiper(".standart_slider", {
  slidesPerView: 1.7,
  spaceBetween: 25,
  loop: 'true',
  navigation: {
    nextEl: ".arrow-left-field",
    prevEl: ".arrow-right-field",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    375: {
      slidesPerView: 1
    },
    425: {
      slidesPerView: 1.7
    },
  },
});


var quality_slider = new Swiper(".quality-slider", {
  loop: 'true',
  effect: 'fade',
  slidesPerView: 1,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"><span class="text">'+ (index + 1) + "</span></span>";
    },
  },
});

quality_slider.on('slideChange', function () {
  var qualityIMG1 = $('.quality-slider .swiper-slide-active .slide-inner').attr('data-quality-img1');
  $('.custom-image-1').attr('src', qualityIMG1);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header-inner");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var scrollPosition = 0;
$(window).scroll(function () {
  var currenPosition = $(this).scrollTop();
  if (currenPosition > scrollPosition) {
    var header1 = document.querySelector('.header-inner');
    header1.classList.remove('scroll-up');
    header1.classList.add('scroll-down');
  }
  else {
    var header1 = document.querySelector('.header-inner');
    header1.classList.remove('scroll-down');
    header1.classList.add('scroll-up');
  }
  scrollPosition = currenPosition;
});

$('.input-field').click(function () {
  $('.input-field').find('span').removeClass('width-100');
  $(this).find('span').toggleClass('width-100');
});
$('.textarea-input-field').click(function () {
  $(this).find('span').toggleClass('width-100');
});

$('.header-inner .navigation-open-btn').click(function () {
  $('body').toggleClass('overflow-hidden');
});


var te = gsap.timeline({ defaults: { ease: Expo.InOut } });

document.querySelector(".navigation-menu-button").addEventListener('click', function () {
  tween1.restart();
  tween2.restart();
});

var tween1 = gsap.from("#navigation-menu-img1", {
  yPercent: 75,
  duration: 2,
  ease: "power4.out",
})
var tween2 = gsap.from("#navigation-menu-img2", {
  yPercent: -75,
  duration: 2,
  ease: "power4.out",
})

gsap.from("#homepage-about-field-1", {
  scrollTrigger: "about",
  opacity: 0,
  x: -150,
  duration: 2,
}, "+=1");


gsap.from("#homepage-services-field-1", {
  scrollTrigger: {
    trigger: "#homepage-services-field-2",
    start: " bottom bottom",
  }, opacity: 0,
  duration: 1,
  yPercent: -10,
}, "+=5");
gsap.from("#homepage-services-field-2", {
  scrollTrigger: {
    trigger: "#homepage-services-field-2",
    start: " bottom bottom",
  },
  opacity: 0,
  duration: 1,
  yPercent: 10,
}, "+=5");


gsap.from("#homepage-quality-policy-title-1", {
  scrollTrigger: {
    trigger: "#homepage-quality-policy-content",
    start: "bottom bottom",
  },
  opacity: 0,
  y: -250,
  duration: 2,
}, "+=1");

gsap.from("#homepage-quality-policy-title-2", {
  scrollTrigger: {
    trigger: "#homepage-quality-policy-content",
    start: "bottom bottom",
  },
  opacity: 0,
  y: 250,
  duration: 2,
}, "+=2");

gsap.from("#quality-policy-title", {
  scrollTrigger: "#quality-policy-content-2",
  opacity: 0,
  xPercent: -10,
  duration: 1,
});

gsap.from("#quality-policy-title-2", {
  scrollTrigger: "#quality-policy-content-2",
  opacity: 0,
  xPercent: -10,
  duration: 1,
  delay: 1,
});

gsap.from("#value", {
  scrollTrigger: "#value-field",
  opacity: 0,
  xPercent: -25,
  duration: 2,
  delay: 1,
});

gsap.from("#value-content", {
  scrollTrigger: "#value-field",
  opacity: 0,
  yPercent: 25,
  duration: 2,
  delay: 1,
});



gsap.from('#main-breadcrumb-field-1', {
  rotate: -45,
  xPercent: -100,
  yPercent: -100,
  duration: 1,
});
gsap.from('#main-breadcrumb-field-2', {
  xPercent: 10,
  yPercent: 10,
  duration: 1,
  opacity: 0,
  ease: Expo.InOut,
});
var windowWidth = $(window).width();
if (windowWidth > 768) {
  gsap.from('#about-main-field-1', {
    scrollTrigger: {
      trigger: "#about-main",
      start: "bottom bottom",
    },
    opacity: 0,
    xPercent: -20,
    duration: 1,
  });
} else {
  gsap.from('#about-main-field-1', {
    scrollTrigger: {
      trigger: "#about-main-field-1",
    },
    opacity: 0,
    xPercent: -20,
    duration: 1,
  });
}


var windowWidth = $(window).width();
if (windowWidth > 992) {
  gsap.to("#about-main-imgField-2", {
    scrollTrigger: {
      trigger: "#about-main",
      start: "top center",
      end: "top 100px",
      scrub: 1,
      markers: false,
    },
    yPercent: -15,
  });
} else {
  gsap.to("#about-main-imgField-2", {
    scrollTrigger: {
      trigger: "#about-main",
      start: "top center",
      end: "top 100px",
      scrub: 1,
      markers: false,
    },
    yPercent: 0,
  });
}

gsap.to("#about-main-imgField-1", {
  scrollTrigger: {
    trigger: "#about-main",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    markers: false,
  },
  yPercent: 30,
});








gsap.from("#field-mission", {
  scrollTrigger: {
    trigger: "#about-mission-and-vision",
    start: "bottom bottom",
  },
  duration: 1,
  opacity: 0,
  yPercent: -100,
}, "+=1");
gsap.from("#field-vision", {
  scrollTrigger: {
    trigger: "#about-mission-and-vision",
    start: "bottom bottom",
  },
  duration: 1,
  opacity: 0,
  yPercent: 100,
}, "+=1");


gsap.from("#WashingServices-text-field-1", {
  scrollTrigger: "#washing-services-field-1",
  xPercent: -25,
  duration: 1,
  opacity: 0,
}, "+=1");


gsap.from("#WashingServices-text-field-2", {
  scrollTrigger: "#washing-services-field-1",
  xPercent: 25,
  duration: 1,
  opacity: 0,
}, "+=1");

gsap.from("#WashingServices-title-1", {
  scrollTrigger: {
    trigger: "#washing-services-field-2",
  },
  opacity: 0,
  yPercent: 50,
  duration: 2,
});
gsap.from("#WashingServices-title-2", {
  scrollTrigger: {
    trigger: "#washing-services-field-2",

  },
  opacity: 0,
  yPercent: -50,
  duration: 2,
}, "+=1");

gsap.from("#WashingServices-card-field-1", {
  scrollTrigger: "#washing-services-field-2-main",
  opacity: 0,
  yPercent: 15,
  duration: 2,
}, "+=1");

gsap.from("#WashingServices-card-field-2", {
  scrollTrigger: "#washing-services-field-2-main",
  opacity: 0,
  yPercent: -15,
  duration: 2,
}, "+=1");



gsap.from("#linenTitle1", {
  scrollTrigger: "#linen-rental-content-1",
  opacity: 0,
  duration: 1,
  yPercent: -10,
}, "+=1");


gsap.from("#linenTitle2", {
  scrollTrigger: "#linen-rental-content-1",
  opacity: 0,
  duration: 1,
  yPercent: 10,
}, "+=1");


gsap.from("#Linen-field-1", {
  scrollTrigger: "#Linen-field-1",
  opacity: 0,
  xPercent: -50,
  duration: 1,
})

gsap.to("#LinenImgField-1", {
  scrollTrigger: {
    trigger: "#linen-rental-content-2",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    markers: false,
  },
  yPercent: 20,
})

gsap.to("#LinenImgField-2", {
  scrollTrigger: {
    trigger: "#linen-rental-content-2",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    markers: false,
  },
  yPercent: -20,
})

gsap.from("#RFID-Field-1", {
  scrollTrigger: "#page-RFID-content-2",
  opacity: 0,
  duration: 1,
});

gsap.from("#RFID-Field-2", {
  scrollTrigger: "#page-RFID-content-2",
  opacity: 1,
  duration: 1,
}, "+=1");

gsap.to("#RFID-Field-1", {
  scrollTrigger: {
    trigger: "#page-RFID-content-2",
    start: "top 150px",
    end: "top bottom",
    scrub: 2,
    markers: false,
  },
  yPercent: 10,
}, "+=2");

gsap.from("#RFID-Field-2", {
  scrollTrigger: {
    trigger: "#page-RFID-content-2",
    start: "top 100px",
  },
  yPercent:30,
  opacity:0,
  duration:1,
});

gsap.from("#RFID-text", {
  scrollTrigger: {
    trigger: "page-RFID-content-3",
    start: "center center",
  },
  y: 100,
  opacity: 0,
  duration: 1,
}, "+=1");

gsap.from("#customer-services-content-1-text", {
  scrollTrigger: "#customer-services-content-1",
  opacity: 0,
  yPercent: -50,
  duration: 1,
});


gsap.to("#customer-services-content-1-img1", {
  scrollTrigger: {
    trigger: "#customer-services-content-1",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    markers: false
  },
  yPercent: 22,
})


gsap.to("#customer-services-content-1-img2", {
  scrollTrigger: {
    trigger: "#customer-services-content-1",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    markers: false
  },
  yPercent: -22,
})


gsap.from("#customer-services-content-2-text", {
  scrollTrigger: "#customer-services-content-2",
  opacity: 0,
  yPercent: 50,
  duration: 1,
});


gsap.to("#customer-services-content-2-img1", {
  scrollTrigger: {
    trigger: "#customer-services-content-2",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    markers: false
  },
  yPercent: 22,
})


gsap.to("#customer-services-content-2-img2", {
  scrollTrigger: {
    trigger: "#customer-services-content-2",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    markers: false
  },
  yPercent: -22,
})


gsap.from("#customer-services-content-3-img", {
  scrollTrigger: "#customer-services-content-3",
  opacity: 0,
  yPercent: -25,
  duration: 1,
}, "+=1");


gsap.from("#customer-services-content-4-title", {
  scrollTrigger: "#customer-services-content-4",
  opacity: 0,
  yPercent: 50,
  duration: 1,
}, "-=.5");

gsap.from("#icon-box", {
  scrollTrigger: "#customer-services-content-4",
  opacity: 0,
  duration: 1,
  rotate: -45,
  delay: 0.5,
  scale: 0.8,
}, "+=1");


gsap.from("#linen-rental-content-1-text",{
  scrollTrigger:"#linen-rental-content-1",
  opacity:0,
  duration:1,
  yPercent:50,
});

gsap.to("#bg-shape-svg",{
  scrollTrigger:{
    trigger:"#quality-policy-content-1",
    start:"top center",
    end:"top 100px",
    scrub:2,
    markers:false,
  },
  x:-200,
});

gsap.from("#quality-policy-content-1-text",{
  scrollTrigger:{
    trigger:"#quality-policy-content-1",
    start:"center bottom",
  },
  opacity:0,
  yPercent:20,
  duration:1,
});


gsap.to("#handPNG",{
  scrollTrigger:{
    trigger:"#quality-policy-content-1",
    start:"top center",
    end:"bottom 150px",
    scrub:1,
    markers:false,
  },
  yPercent:25,
});

gsap.from("#quality-policy-content2-field-1",{
  scrollTrigger:"#quality-policy-content-2",
  opacity:0,
  duration:1,
  yPercent:20,
})


gsap.from("#quality-policy-content2-field-2",{
  scrollTrigger:"#quality-policy-content-2",
  opacity:0,
  duration:1,
  yPercent:-20,
})


gsap.to("#bg-shape-svg2",{
  scrollTrigger:{
    trigger:"#quality-policy-content-3",
    start:"top center",
    end:"top 100px",
    scrub:2,
    markers:false,
  },
  x:200,
});

gsap.from("#quality-policy-content-3-text",{
  scrollTrigger:{
    trigger:"#quality-policy-content-3",
    start:"center bottom"
  },
  opacity:0,
  yPercent:20,
  duration:1,
});


gsap.from("#worldPNG",{
  scrollTrigger:{
    trigger:"#quality-policy-content-3",
    start:"top center",
  },
  opacity:0,
  yPercent:100,
  duration:2,
  ease: "power4.out",
});

SmoothScroll({
  animationTime: 1000,
  stepSize: 100,
  accelerationDelta: 100,
  accelerationMax: 2,
});