$(function () {
  const audio = $("#audio")[0];

  // 재생 가능한 곡들: data-src 있는 것만
  const $songs = $(".chart_item[data-src], .track_item[data-src]");

  // 미니/풀 공통 버튼
  const $miniPlay = $(".player .player_control .control_btn").eq(1).find("i");
  const $fullPlay = $(".player_full .controls .play i");

  // prev/next 버튼
  const $miniPrev = $(".player .player_control .control_btn").eq(0);
  const $miniNext = $(".player .player_control .control_btn").eq(2);
  const $fullPrev = $(".player_full .controls .prev");
  const $fullNext = $(".player_full .controls .next");

  // 텍스트
  const $miniTitle = $(".song_title");
  const $miniArtist = $(".song_artist");
  const $fullTitle = $(".ps_title");
  const $fullArtist = $(".ps_artist");

  // 커버/배경
  const $thumb = $(".player_thumb_img img");
  const $bg = $(".player_bgimg img");

  // 진행바
  const $progress = $(".progress");
  const $cur = $(".current");
  const $dur = $(".duration");

  let idx = 0;

  function icon(isPlay) {
    const cls = isPlay ? "fa-solid fa-pause" : "fa-solid fa-play";
    $miniPlay.attr("class", cls);
    $fullPlay.attr("class", cls);

    // 리스트 아이콘은 일단 전부 play로 초기화
    $(".chart_item .btn_box .btn:first-child i, .track_item .track_play i")
      .attr("class", "fa-solid fa-play");

    // 현재 곡만 반영하기
    const $now = $songs.eq(idx);
    if ($now.hasClass("chart_item")) $now.find(".btn_box .btn:first-child i").attr("class", cls);
    else $now.find(".track_play i").attr("class", cls);
  }

  function load(i, autoplay) {
    idx = (i + $songs.length) % $songs.length;
    const $item = $songs.eq(idx);

    const src = $item.data("src");
    const title = $item.find(".title, .track_title").first().text().trim();
    const artist = $item.find(".artist, .track_artist").first().text().trim();
    const cover = $item.find(".thumb_box img").attr("src"); // 차트만 일단 씀

    $miniTitle.text(title);
    $miniArtist.text(artist);
    $fullTitle.text(title);
    $fullArtist.text(artist);

    if (cover) {
      $thumb.attr("src", cover);
      $bg.attr("src", cover); // 배경도 커버로 그냥 통일
    }

    if (audio.getAttribute("src") !== src) {
      audio.src = src;
      audio.load();
    }

    if (autoplay) audio.play().then(() => icon(true)).catch(() => icon(false));
    else icon(false);
  }

  function toggle() {
    if (audio.paused) audio.play().then(() => icon(true)).catch(() => icon(false));
    else { audio.pause(); icon(false); }
  }

  // 차트 play 버튼
  $(document).on("click", ".chart_item .btn_box .btn:first-child", function (e) {
    e.preventDefault(); e.stopPropagation();
    const i = $songs.index($(this).closest(".chart_item"));
    if (i === idx) toggle();
    else load(i, true);
  });

  // 트랙 play 버튼
  $(document).on("click", ".track_item .track_play", function (e) {
    e.preventDefault(); e.stopPropagation();
    const i = $songs.index($(this).closest(".track_item"));
    if (i === idx) toggle();
    else load(i, true);
  });

  // 미니/풀 play
  $(".player .player_control .control_btn").eq(1).on("click", toggle);
  $(".player_full .controls .play").on("click", toggle);

  // prev/next
  $miniPrev.on("click", () => load(idx - 1, true));
  $miniNext.on("click", () => load(idx + 1, true));
  $fullPrev.on("click", () => load(idx - 1, true));
  $fullNext.on("click", () => load(idx + 1, true));

  // progress
  audio.addEventListener("loadedmetadata", () => {
    $dur.text(format(audio.duration));
    $progress.attr("max", Math.floor(audio.duration || 0));
  });

  audio.addEventListener("timeupdate", () => {
    $cur.text(format(audio.currentTime));
    $progress.val(Math.floor(audio.currentTime || 0));
  });

  $progress.on("input change", function () {
    audio.currentTime = Number(this.value || 0);
  });

  audio.addEventListener("ended", () => load(idx + 1, true));

  function format(sec) {
    sec = Math.floor(sec || 0);
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  // 시작
  if ($songs.length) load(0, false);
});
