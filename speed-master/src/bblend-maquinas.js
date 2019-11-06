'use strict';

//fade desktop
$(window).scroll(function(){
  $(".purple-desk").css("opacity", 1 - $(window).scrollTop() / 1250);
});


//header efeito
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.menu-header').style.top = '0';
  } else {
    document.querySelector('.menu-header').style.top = '-50px';
  }
  prevScrollPos = currentScrollPos;
};

//btn sandwich header
function btnSandwich(x) {
  x.classList.toggle("change");
};

//accordion button arrow
function accFunc(x) {
  x.classList.toggle("arrow-down");
};

//btns smart container
$('.btns').click(function() {
	$('#content .container-fluid').hide();
    let target = '#' + $(this).data('target');
    $(target).show();
});

//btns produtos container
$('.btns-prod').click(function() {
	$('#content-produtos .swiper-container').hide();
    let target = '#' + $(this).data('target');
    $(target).show();
});

//svg path selected smart
$('.wrap-menu-smart-desk svg').on("click", function() {
  $('.wrap-menu-smart-desk svg.selected').attr("class", "");
  $(this).attr("class", "selected");
});
$('.wrap-menu-smart-mob svg').on("click", function() {
  $('.wrap-menu-smart-mob svg.selected').attr("class", "");
  $(this).attr("class", "selected");
});

//svg path selected produtos
$('.center-btns-prod-desk svg').on("click", function() {
  $('.center-btns-prod-desk svg.selected').attr("class", "");
  $(this).attr("class", "selected");
});

//slick carousel
$('.helperComplement').remove();
$(document).ready(function() {
  $('.shelf-bblend-maquinas ul').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });  
});
$(window).on('resize orientationchange', function() {
  $('.shelf-bblend-maquinas ul').slick('resize');
});

//frete modal
$('#btn-calcular-cep').on('click', function (e) {
  e.preventDefault();
  let items = [{
    id: 'SKU-DO-PRODUTO',  // sku do item
    quantity: 1,
    seller: '1'
  }];
  let postalCode = $('#input-cep').val();
  let country = 'BRA';
  vtexjs.checkout.simulateShipping(items, postalCode, country)
    .done(function (result) {
      console.log(result);
      $('#resultado-cep').html("Teste: R$" + result.messages);
    });
})


  
//swiper carousel produtos
let swiperSucoFru = new Swiper('.suco-fruta-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperSucoFun = new Swiper('.suco-funcional-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperNec = new Swiper('.nectares-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperChaHot = new Swiper('.chas-quentes-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperCafes = new Swiper('.cafes-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperChoco = new Swiper('.chocolates-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperRefri = new Swiper('.refri-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperFrapes = new Swiper('.frapes-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperChasGel = new Swiper('.chas-gelados-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperDrinks = new Swiper('.drinks-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});
let swiperEnergy = new Swiper('.energy-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    stretch: 120,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
});