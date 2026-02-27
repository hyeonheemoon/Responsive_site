fetch("./js/news.json")
  .then((res) => res.json())
  .then((newsData) => {
    const newsList = document.querySelector("#news_list");

    newsList.innerHTML = newsData
      .map((item) => `
        <li  data-href="../detail/detail.html">
          <div class="date_box">
            <p class="day">${item.day}</p>
            <p class="date_meta">${item.date}</p>
          </div>

          <div class="news_thumb">
            <img src="${item.img}" alt="뉴스 썸네일">
          </div>

          <div class="news_list_info">
            <p class="news_list_title">${item.title}</p>
            <p class="news_list_txt">${item.text}</p>
          </div>

          <div class="news_list_btn_box">
            <button type="button" class="btn_like">
              <i class="fa-regular fa-heart"></i>
              <p class="like_num">${item.like}</p>
            </button>
            <button type="button" class="btn_bookmark">
              <i class="fa-regular fa-bookmark"></i>
              <p class="bookmark_num">${item.bookmark}</p>
            </button>
          </div>
        </li>
      `)
      .join("");

if (window.matchMedia("(max-width: 768px)").matches) {
  const total = $("#news_list li").length;

  $("#news_list li:gt(4)").hide();

  // 5개 이하이면 버튼 둘 다 숨김
  if (total <= 5) {
    $(".more_list").hide();
    $(".less_list").hide();
    return;
  }

  // 기본은 더보기만
  $(".more_list").show();
  $(".less_list").hide();

  $(".more_list").off("click").on("click", function () {
    $("#news_list li:lt(10)").show();
    $(".more_list").hide();

    // 10개 이상일 때만 접기 버튼 보여주기
    if (total > 5) $(".less_list").show();
  });

  $(".less_list").off("click").on("click", function () {
    $("#news_list li:gt(4)").hide();
    $(".less_list").hide();
    $(".more_list").show();
  });
}


  })
  .catch((err) => console.log("JSON 불러오기 실패:", err));

  $(function () {

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


  $('.footer_detail p').on('click', function () {
    $('.footer_info').slideToggle(200);

    $(this).find('.open, .close').toggle();
  });

   $('.menu').click(function() {
  $('.sub_menu').toggleClass('is_open');
  $('.dim').toggleClass('is_open');
});

$('.search_icon').on('click', function () {
  $('.search_area').addClass('active');
});
$('.back').on('click', function () {
  $('.search_area').removeClass('active');
});

$(document).on('click', '.news_list_btn_box button:first-child', function () {
  $(this).find('i').toggleClass('fa-regular fa-solid');
});

$(document).on('click', '.news_list_btn_box button:last-child', function () {
  $(this).find('i').toggleClass('fa-regular fa-solid');
});

$(document).on('click', '#news_list li', function () {
  const href = $(this).data('href');
  if (href) window.location.href = href;
});

//************ top *************//
$('.btn_top a').on('click', function(e){
  e.preventDefault();

  const targetTop = $('#header').offset().top;

  $('html, body').animate({
    scrollTop: targetTop
  }, 500);
});

//*****검색창********//
$('.search_box input').on('focus', function(){
  $('.pc_search_area').show();
}).on('blur', function(){
  $('.pc_search_area').hide();
});

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