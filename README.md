# 🎧 Melon 반응형 팀 프로젝트

음원 스트리밍 사이트를 반응형 웹으로 구현한 팀 프로젝트입니다.
전체 기획 단계부터 아이디어 도출, 스케치, 시안 작업까지 팀원들과 회의를 통해 방향성을 설정하고
사용자 중심의 UI/UX를 고려하여 퍼블리싱을 진행했습니다.


팀원들과 자유로운 의사소통을 위해 브레인스토밍을 진행했고,
정보구조를 기획하는 단계에서는 포스트잇을 이용한 카드소팅도 진행했습니다.

---

## ⏰개발 기간
- 26.01.06 ~ 26.01.27


## 📸 Demo

데모사이트 : [반응형 팀프로젝트](https://hyeonheemoon.github.io/Responsive_site/)

---

## 🚀 Features

* 🎵 음악 플레이 기능
* 📃 모바일 / 태블릿 / PC 기기 호환
* ▶️ 카드 클릭 시 플레이어 목록 변경
* ⏸️ 재생 / 정지 기능

---

## 🛠 Tech Stack

* HTML
* CSS
* JavaScript
* jQuery

---

## 📂 Project Structure

```
project
│
├─ index.html
│
├─ css
│
├─ images
│
├─ js
│   ├─ main.js
│   ├─ player.js
│   └─ playlist.js
│
├─ detail
│   ├─ detail.html
│   ├─ css
│   ├─ images
│   └─ js
│
├─ sub
│   ├─ sub.html
│   ├─ css
│   ├─ images
│   └─ js
│
└─ mp3
```

---

## 💡 주요 코드

``` const playlists = [
    {
      title: "Presenting SPYAIR",
      meta: "총 43곡 | 02 : 39 : 41",
      cover: "./images/playlist_01.png",
      tracks: [
        {
          title: "オレンジ - Orange",
          album: "Orange",
          artist: "SPYAIR",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_07.jpg"
        },
        {
          title: "Genjyou Destruction",
          album: "Genjyou Destruction",
          artist: "SPYAIR",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_08.jpg"
        },
```

```   $(".playlist_card").on("click", function () {
    const idx = $(this).index();
    const data = playlists[idx];

    if (!data) return;

    $(".player_cover_img_box img").attr("src", data.cover);

    $(".player_title").text(data.title);
    $(".player_info .player_meta").text(data.meta);

    let html = "";
    data.tracks.forEach((t) => {
      html += `
        <li class="track_item" data-src="${t.src}">
          <div class="track_thumb" style="background-image:url('${t.thumb}')"></div>
          <div class="track_info">
            <p class="track_title">${t.title}</p>
            <p class="track_album">${t.album}</p>
            <p class="track_artist">${t.artist}</p>
          </div>
          <button type="button" class="track_play">
            <i class="fa-solid fa-play"></i>
          </button>
        </li>
      `;
    });

    $(".track_list").html(html);

    $(".playlist_card").removeClass("active");
    $(this).addClass("active");
  });
```

<img width="690" height="387" alt="image" src="https://github.com/user-attachments/assets/78e27d55-4204-43a1-9197-e38aa17d2e80" />

플레이리스트를 배열로 관리하고 카드 클릭 시 플레이어 영역과 트랙 리스트를 다시 렌더링했습니다.
트랙 목록은 forEach로 생성해 .track_list에 넣었고, 선택된 카드에는 active 클래스를 적용했습니다.

---

``` {
    "day": "MON",
    "date": "2025.12.22",
    "img": "./images/news_thumb01.png",
    "title": "또 다른 나를 찾아 떠난 여행, WOODZ(우즈) 미니 5집 [OO-LI]",
    "text": "안녕하세요 멜론 가족 여러분! WOODZ(우즈)의 미니 5집 [OO-LI]가 발매 되었습니다!",
    "like": 12,
    "bookmark": 8
  },
  {
    "day": "TUE",
    "date": "2025.12.21",
    "img": "./images/news_thumb02.png",
    "title": "'ALLDAY PROJECT'의 시작을 알리는 출사표 [FAMOUS]",
    "text": "Lyrics by TARZZAN, WOOCHAN, YOUNGSEO, TEDDY, Vince, Claudia Valentina, Zikai, Norib\nComposed by Jumpa, Claudia Valentina, Zikai, Norib, Dominsuk, Vince\nArranged by Jumpa, 24, Dominsuk, Vince",
    "like": 5,
    "bookmark": 2
  },
```

``` fetch("./js/news.json")
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
```
<img width="763" height="711" alt="image" src="https://github.com/user-attachments/assets/c43a4aba-c30e-4d61-aafb-424b74ec3850" />

뉴스 데이터를 JSON으로 관리하고, 페이지 로드 시
fetch()
​
로 불러오도록 구현했습니다.
받아온 데이터를
map()
​
으로 가공해 리스트 구조로 변환한 뒤, innerHTML에 삽입하는 방식으로 처리했습니다.

---

``` $('.send').on('click', function(){
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
```
<img width="726" height="442" alt="image" src="https://github.com/user-attachments/assets/4490837c-ff21-4bf8-8cc5-51b9c14f0656" />

댓글 입력 후 등록 버튼을 누르면 리스트 상단에 새 댓글이 추가되도록 구현했습니다.
공백만 입력되는 경우는 등록되지 않도록 처리했고, 등록 후에는 입력창을 초기화했습니다.
입력값을
trim()
​
으로 가공해 공백 입력을 방지했고,
prepend()
​
를 사용해 최신 댓글이 상단에 표시되도록 구현했습니다.

👨‍💻 Author
성장하는 모습 보이도록 하겠습니다!

