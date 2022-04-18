$(document).ready(function(){

  $('.current-lang').on('click', function(){
    $('.change-lang').addClass('active')
  });
  /*$('.current-lang-small').on('click', function(){
    $('.change-lang').removeClass('active')
  });*/

  $(document).on('click',function(e){
    let elem = e.target;
    if($(elem).hasClass('current-lang') || $(elem).hasClass('new-lang-link') || $(elem).hasClass('new-lang-pic') || $(elem).hasClass('new-lang-name')) {
      return;
    }
    else {
      $('.change-lang').removeClass('active');
    }
  })


  /*$('.up').on('click',function () {
    $('html, body').animate({ scrollTop: 0 }, 700);
  });
  $(window).on('scroll',function(){
    if($(this).scrollTop() >= 300) {
      $('.up').css('opacity',1);
    }
    else {
      $('.up').css('opacity',0);
    }
  });*/

  $('.navbar-toggler').on('click',function(){
    $(this).toggleClass('opened');
    $('.navbar').toggleClass('visible');
  });


  $('.top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    fade: true,
    pauseOnHover: false
  });


  $('.naprav-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 2
        }
      },
    ]
  });

  $('.country-card').on('click', function(){
    let data = $(this).attr('data-card');
    $('.country-card-content').each(function(){
      if($(this).attr('id') == data) {
        $(this).addClass('active')
      }
    })
  });

  $('.country-card-close').on('click', function(){
    $('.country-card-content').removeClass('active')
  });

  $('.startax-hotels-item').on('click', function(){
    $(this).children('.startax-hotels-list').toggleClass('active');
    $('.startax-hotels-list').not($(this).children()).removeClass('active');
  });

  /*$('.naprav-slider .slick-center').css('opacity',1);
  $('.naprav-slider .slick-center').prev().css('opacity',1);
  $('.naprav-slider .slick-center').next().css('opacity',1);

  $('.naprav-slider').on('afterChange', function(){
    $('.naprav-slider .slick-slide').css('opacity',0.5);
    $('.naprav-slider .slick-center').css('opacity',1);
    $('.naprav-slider .slick-center').prev().css('opacity',1);
    $('.naprav-slider .slick-center').next().css('opacity',1);
  });*/

});