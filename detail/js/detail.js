$(function () {
 $('.menu').click(function() {
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

  const $header = $('.header_outer');
  const fixPoint = $('.util_outer').outerHeight() || 0;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > fixPoint) {
      $header.addClass('is_fixed');
    } else {
      $header.removeClass('is_fixed');
    }
  });

  //팝업띄우기
  $('.detail_btn').on('click', function(){
    $('.popup_frame01').show();
  });
 //팝업닫기
  $('.close').on('click', function(){
    $('.popup_frame01').hide();
  });

  $('.popup_menu02').on('click', function(){
    $('.popup_frame01').hide();
    $('.popup_frame02').show();
  });

  $('.close, .report').on('click', function(){
    $('.popup_frame02').hide();
  });

  $('.report_btn').on('click', function(){
    $('.popup_frame02').show();
  });

$('.report_item i').on('click', function () {
  $('.report_item i').removeClass('fa-solid').addClass('fa-regular');
  $(this).removeClass('fa-regular').addClass('fa-solid');
});




function setPlaceholder() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      $('.input_box input').attr('placeholder', '욕설 · 비방 · 음란성 · 도배 등 다른 이용자에게 불쾌감을 줄 수 있는 내용은 사전에 안내없이 삭제될 수 있습니다.');
    } else {
      $('.input_box input').attr('placeholder', '댓글은 최대 110자까지 달 수 있습니다.');
    }
  }

  setPlaceholder();
  $(window).on('resize', setPlaceholder);


  //댓글작성하기
  $('.send').on('click', function(){
    let text =$('.input_box input').val().trim();

    if (text === '') return;

      $('.comment_list').prepend(`
    <li class="comment_item">
      <div class="user_info_box">
        <div class="user_img_box">
          <img src="./images/profile.png" alt="기본유저프로필이미지">
        </div>
        <p class="user_name">나</p>
      </div>

      <div class="comment_box">
        <p class="comment">${text}</p>
        <p class="comment_date_meta">방금</p>

        <div class="comment_btn_box">
          <button class="like" type="button"><i class="fa-regular fa-heart"></i></button>
          <button type="button" class="detail_btn">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <button type="button" class="report_btn">
            <i class="fa-solid fa-bullhorn"></i>
          </button>
        </div>
      </div>
    </li>
  `);

  $('.input_box input').val('');
  });

  //하트채우기
  $('.like i').on('click', function(){
    $(this).removeClass('fa-regular').addClass('fa-solid');
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



