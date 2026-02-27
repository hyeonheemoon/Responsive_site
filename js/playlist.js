$(function () {

  const playlists = [
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
        {
          title: "サクラミツツキ - Sakuramitsutsuki",
          album: "Sakuramitsutsuki",
          artist: "SPYAIR",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_09.jpg"
        },
        {
          title: "Kill the Noise",
          album: "Kill the Noise",
          artist: "SPYAIR",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_010.jpg"
        },
        {
          title: "Chase the Shine",
          album: "Chase the Shine",
          artist: "SPYAIR",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_011.jpg"
        }
      ]
    },
    {
      title: "독립적인 감성의 국내 인디",
      meta: "총 85곡 | 05 : 15 : 10",
      cover: "./images/playlist_02.png",
      tracks: [
        {
          title: "0+0",
          album: "자몽살구클럽",
          artist: "한로로",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_012.jpg"
        },
        {
          title: "주저하는 연인들을 위해",
          album: "LEGEND(전설)",
          artist: "JANNABI",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_013.jpg"
        },
        {
          title: "EVERYTHING",
          album: "TEAN BABY",
          artist: "검정치마",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_014.jpg"
        },
        {
          title: "yours",
          album: "yours",
          artist: "데이먼스 이어",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_015.jpg"
        },
        {
          title: "TOMBOY",
          album: "23",
          artist: "혁오",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_016.jpg"
        }
      ]
    },
    {
      title: "Energizing Anime Hits",
      meta: "총 14곡 | 01 : 54 : 00",
      cover: "./images/playlist_03.png",
      tracks: [
      {
          title: "IRIS OUT",
          album: "IRIS OUT",
          artist: "Kenshi Yonezu",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_017.jpg"
        },
      {
          title: "サムライハート(Some Like It Hot!!)",
          album: "Some Like It Hot!!",
          artist: "SPYAIR",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_018.jpg"
        },
      {
          title: "ライラック - Lilac",
          album: "Lilac",
          artist: "Mrs.GREEN APPLE",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_019.jpg"
        },
      {
          title: "イマジネーション - Imagination",
          album: "Four",
          artist: "SPYAIR",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_020.jpg"
        },
      {
          title: "KICK BACK",
          album: "KICK BACK",
          artist: "Kenshi Yonezu",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_021.jpg"
        },
      ]
    },
    {
      title: "Presenting 아일릿 (ILLIT)",
      meta: "총 22곡 | 00 : 59 : 22",
      cover: "./images/playlist_04.png",
      tracks: [
       {
          title: "NOT CUTE ANYMORE",
          album: "NOT CUTE ANYMORE",
          artist: "ILLIT",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_022.jpg"
        },
       {
          title: "Magnetic",
          album: "SUPER REAL ME",
          artist: "ILLIT",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_023.jpg"
        },
       {
          title: "jellyous",
          album: "bomb",
          artist: "ILLIT",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_024.jpg"
        },
       {
          title: "빌려온 고양이 (Do the Dance)",
          album: "bomb",
          artist: "ILLIT",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_024.jpg"
        },
       {
          title: "Tick-Tack",
          album: "I'LL LIKE YOU",
          artist: "ILLIT",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_025.jpg"
        },
      ]
    },
    {
      title: "그루브 온: 인기 국내 R&B",
      meta: "총 80곡 | 04 : 23 : 11",
      cover: "./images/playlist_05.png",
      tracks: [
         {
          title: "LIE(2026 ver.)",
          album: "I'LL LIKE YOU",
          artist: "ILLIT",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_026.jpg"
        },
         {
          title: "널 처음 본 순간 하루종일 생각나",
          album: "널 처음 본 순간 하루종일 생각나",
          artist: "윤아 및 민주",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_027.jpg"
        },
         {
          title: "Guilty Pleasure",
          album: "'소야곡'",
          artist: "도겸X승관 (SEVENTEEN)",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_028.jpg"
        },
         {
          title: "기억의 저편에",
          album: "기억의 저편에",
          artist: "주시크",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_029.jpg"
        },
         {
          title: "우리들의 순간",
          album: "Soul Tricycle",
          artist: "브라운 아이드 소울",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_030.jpg"
        },
      ]
    },
    {
      title: "비스트 모드 힙합",
      meta: "총 25곡 | 01 : 30 : 00",
      cover: "./images/playlist_06.png",
      tracks: [
     {
          title: "FE!N (feat. Playboi Carti)",
          album: "UTOPIA",
          artist: "Travis scott",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_031.jpg"
        },
     {
          title: "SICKO MODE",
          album: "ASTROWORLD",
          artist: "Travis scott",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_032.jpg"
        },
     {
          title: "Mask Off",
          album: "FUTURE",
          artist: "Future",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_033.jpg"
        },
     {
          title: "HUMBLE",
          album: "DAMN.COLLECTOR",
          artist: "Kendrick Lamar",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_034.jpg"
        },
     {
          title: "Panda",
          album: "Panda",
          artist: "Desiigner",
          src: "./mp3/drowning.mp3",
          thumb: "./images/track_035.jpg"
        },
      ]
    }
  ];

  $(".playlist_card").on("click", function () {
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

});//jquery