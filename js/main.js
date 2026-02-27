$(function () {
  $('.banner-slider').slick({
    centerMode: true,
    infinite: true,
    arrows: true,
    dots: false,
    speed: 400,
    slidesToShow: 1,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '200px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '70px'
        }
      }
    ]
  }); //banner_slide;

  $('.visual_main').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    infinite: true
  });

 $('.menu').on('click', function () {
    $('.sub_menu').toggleClass('is_open');
    $('.dim02').toggleClass('is_open');
  });
    //************ pc_submenu *************//

  if (window.innerWidth >= 1024) {
    $('.gnb_outer, .pc_sub_menu_frame').hover(
      function () {
        $('.pc_sub_menu_frame').stop().slideDown(200);
      },
      function () {
        $('.pc_sub_menu_frame').stop().slideUp(200);
      }
    );
  }

$(function () {
  $('.footer_detail p').on('click', function () {
    $('.footer_info').slideToggle(200);

    $(this).find('.open, .close').toggle();
  });
});

//************ 플레이어 *************//
$('.btn_detail').click(function () {
  $('.player_full').addClass('active');
});

$('.down').click(function () {
  $('.player_full').removeClass('active');
  $('.player_full').removeClass('active tablet_active');
   $('.player_pl_area').removeClass('active');
  $('.player_full').removeClass('active tablet_active');
});// player

$('.more').click(function(){
  $('.player_pl_area').addClass('active');
});

$('.btn_back').click(function(){
  $('.player_pl_area').removeClass('active');
});

const isTablet = () => window.matchMedia('(min-width: 768px)').matches;

  $('.more').on('click', function () {
    $('.player_pl_area').addClass('active');

    if (isTablet()) {
      $('.player_full').addClass('tablet_active'); // ✅ 40vw로
    }
  });

  $('.btn_back').on('click', function () {
    $('.player_pl_area').removeClass('active');

    if (isTablet()) {
      $('.player_full').removeClass('tablet_active'); // ✅ 100%로
    }
  });


  const isPc = () => window.matchMedia('(min-width: 769px)').matches;

$('.btn_detail').click(function () {
  $('.player_full').addClass('active');

  if (isPc()) {
    $('.player_pl_area').addClass('active');
  }
});

$('.down').click(function () {
  $('.player_full').removeClass('active tablet_active');
  $('.player_pl_area').removeClass('active');
});

//***** 검색창 *************//
$('.search_icon').on('click', function () {
  $('.search_area').addClass('active');
});
$('.back').on('click', function () {
  $('.search_area').removeClass('active');
});

$('.search_box input').on('focus', function(){
  $('.pc_search_area').show();
}).on('blur', function(){
  $('.pc_search_area').hide();
});



// **** contents_tab **********//
 $('.contents_tab').on('click', function () {
    const filter = $(this).data('filter'); // all/domestic/global

    $('.contents_tab').removeClass('active');
    $(this).addClass('active');

    $('.new_music_list_box').hide();
    $('.new_music_list_box[data-type="' + filter + '"]').show();
  });

  $('.contents_tab.active').trigger('click');

  const $header = $('.header_outer');
  const fixPoint = $('.util_outer').outerHeight() || 0;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > fixPoint) {
      $header.addClass('is_fixed');
    } else {
      $header.removeClass('is_fixed');
    }
  });

//************ top *************//
$('.btn_top a').on('click', function(e){
  e.preventDefault();

  const targetTop = $('#header').offset().top;

  $('html, body').animate({
    scrollTop: targetTop
  }, 500);
});



});//jquery



