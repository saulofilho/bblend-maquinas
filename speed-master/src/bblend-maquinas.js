'use strict';

//modal video youtube
function playVideo(){
  $('.btn-play-white').on('click', function(){
    $(".yt-destaque").css("display", "flex");
    $('.yt-destaque').append(' <iframe width="560" height="315"\
      src="https://www.youtube.com/embed/0PkugxJiJ94?autoplay=1&amp;loop=1" frameborder="0"\
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\
      allowfullscreen=""></iframe><span class="vid-x"><img class="close-video-x" data-dismiss="modal"\
          src="data:image/gif;base64,R0lGODlhRABEAIABAP///////yH5BAEAAAEALAAAAABEAEQAAAKVjI+py+0Po5y02oszBPxyoGFfR41gWJlnpKJWu5muJzvw/NbLjefjruvRfgiecPg5GI/IzpLZfEKjyelMtbKisFoXltQVfcHhkkxaZtzQ6WIwwG4/42E03Rq/M+/6Xr9/RTTxVkc2aNiWqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGyvbUwAAOw==" /></span>')
  })
}
function closeVideo() {
  $(document).on('click', '.vid-x .close-video-x', function(){
    $(".yt-destaque").css("display", "none");
    $('.yt-destaque iframe, .close-video-x').remove()
  })
}
function playVideo2(){
  $('.btn-play-red').on('click', function(){
    $(".yt-red").css("display", "flex");
    $('.yt-red').append(' <iframe width="560" height="315"\
      src="https://www.youtube.com/embed/hPonMCQgOBQ?autoplay=1&amp;loop=1" frameborder="0"\
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\
      allowfullscreen=""></iframe><span class="vid-x2"><img class="close-video-x" data-dismiss="modal"\
          src="data:image/gif;base64,R0lGODlhRABEAIABAP///////yH5BAEAAAEALAAAAABEAEQAAAKVjI+py+0Po5y02oszBPxyoGFfR41gWJlnpKJWu5muJzvw/NbLjefjruvRfgiecPg5GI/IzpLZfEKjyelMtbKisFoXltQVfcHhkkxaZtzQ6WIwwG4/42E03Rq/M+/6Xr9/RTTxVkc2aNiWqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGyvbUwAAOw==" /></span>')
  })
}
function closeVideo2() {
  $(document).on('click', '.vid-x2 .close-video-x', function(){
    $(".yt-red").css("display", "none");
    $('.yt-red iframe, .close-video-x').remove()
  })
}
$(document).ready(function () {
  playVideo();
  closeVideo();
  playVideo2();
  closeVideo2();
});

//tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'click',
  });
  $('[data-toggle="tooltip"]').on('click', function (e) {
    $('[data-toggle="tooltip"]').not(this).tooltip('hide');
});
});

// vitrine modal
let vitrineModal = {
  getColecao: $.ajax({
    url: `/api/catalog_system/pub/products/search/?fq=productClusterIds:206`,
    type: 'GET',
    success: function (response) {
      console.log("Resposta", response[0]['brand']);
      //$('#nossas-bebidas').html("Teste: R$" + response[0].brand);
    }
  })
}

//frete modal
$('#btn-calcular-cep').on('click', function (e) {
  e.preventDefault();
  let items = [{
    id: 33,
    quantity: 1,
    seller: '1'
  }];
  let postalCode = $('#input-cep').val();
  let country = 'BRA';
  vtexjs.checkout.simulateShipping(items, postalCode, country)
    .done(function (result) {
      console.log("Teste", result.logisticsInfo[0].slas[0])
      $('#resultado-cep').html("Teste: R$" + result.logisticsInfo[0].slas);
    });
})

//modal infos
/*
let prodModal = {
  getProd: function(id) {
    vtexjs.catalog.getProductWithVariations(id).done(function(product){
      let resultado = product;
      let source = $("#prod-modal").html();
      let template = Handlebars.compile(source);
      let context = resultado;
      $("#prod-infos").append(html);
  });
  }
}
$(document).ready(function() {
  $(".saiba-mais-modal").click(function() {
    prodModal.getProd($(this).attr("id"));
    $("#modalSaibaMais").modal()
  });
});
*/

//fade desktop
$(window).scroll(function(){
  $(".purple-desk").css("opacity", 1 - $(window).scrollTop() / 2250);
});

//header efeito
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.menu-header').style.top = '0';
  } else {
    document.querySelector('.menu-header').style.top = '-80px';
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
//accordion card-header color
$('.accordion .card').on( "click", function() {
	$(this).siblings().find(".card-header").removeClass("cd-active");
	$(this).find(".card-header").toggleClass("cd-active");
});

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
/*
$(window).on('resize orientationchange', function() {
  $('.shelf-bblend-maquinas ul').slick('resize');
});
*/

//swiper carousel produtos
let swiperSucoFru = new Swiper('.suco-fruta-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperSucoFun = new Swiper('.suco-funcional-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperNec = new Swiper('.nectares-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperChaHot = new Swiper('.chas-quentes-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperCafes = new Swiper('.cafes-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperChoco = new Swiper('.chocolates-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperRefri = new Swiper('.refri-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperFrapes = new Swiper('.frapes-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperChasGel = new Swiper('.chas-gelados-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperDrinks = new Swiper('.drinks-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});
let swiperEnergy = new Swiper('.energy-cont', {
  observer: true,
  observeParents: true,
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  preventClicks: false,
	preventClicksPropagation: false,
	slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    bullets: true,
  },
  breakpoints: {
    596: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 350,
      },
    }
  }
});