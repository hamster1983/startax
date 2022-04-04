$(document).ready(function(){


  $('.current-lang').on('click', function(){
    $('.change-lang').addClass('active')
  });
  $('.current-lang-small').on('click', function(){
    $('.change-lang').removeClass('active')
  });


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

  /*$('.nav-link').on('click',function(){
    let elementClick = $(this).attr('href');
    let destination = $(elementClick).offset().top;
    //if(window.matchMedia('(max-width: 767px)').matches) {
      //destination -= $('.navbar-collapse').height();
    //}
    $('html, body').animate({ scrollTop: destination }, 1000);
    $('.navbar-toggler').removeClass('opened');
    $('.navbar').removeClass('visible');
    return false;
  });*/

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

  

  $('.avia .part-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 8
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.postav .part-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 8
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

});