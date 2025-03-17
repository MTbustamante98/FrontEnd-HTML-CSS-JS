const songs = [
  {
    title: "Lost in the city Lights",
    author: "Cosmo Sheldrake",
    src: "resources/lost-in-city-lights-145038.mp3",
    img: "resources/cover-1.jpg",
  },
  {
    title: "Forest Lullaby",
    author: "Lesfm",
    src: "resources/forest-lullaby-110624.mp3",
    img: "resources/cover-2.jpg",
  },
];

//Elements
const figure = document.querySelector(".music-player-one img");
const sectionTitle = document.querySelector(".music-player-one h1");
const sectionAuthor = document.querySelector(".music-player-one p");
const imgPaused = document.querySelector(".btn-pause img");

//Elements-data
const dataTimerBar = document.querySelector("[data-timer-bar]");
const timerWrapper = document.querySelector(".elapsed-time");
const timer = document.querySelector("[data-start-time]");
const endTime = document.querySelector("[data-end-time]");

//Buttons
const rwd = document.querySelector("[data-rewind]");
const fwd = document.querySelector("[data-advanced]");
const btnPlayPause = document.querySelector(".btn-pause");

//Events/touch/click
const events = ["click", "touchstart"];

//Audio
let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].src);
audio.onended = () => endedMusic(imgPaused, timer, dataTimerBar);

function playPauseMusic(event) {
  if (event) event.preventDefault();

  audio.paused
    ? (imgPaused.setAttribute("src", "../music-player-master/resources/play_pause_reverse-1.png"),
      audio.play(),
      progressBar())
    : (imgPaused.setAttribute("src", "../music-player-master/resources/Play_fill.svg"),
      audio.pause());
}

function endedMusic() {
  if (imgPaused && imgPaused.setAttribute) {
    imgPaused.setAttribute("src", "../music-player-master/resources/Play_fill.svg");
  }

  if (timer) {
    timer.innerHTML = "00:00";
  }

  if (timerWrapper && dataTimerBar) {
    dataTimerBar.style.width = "";
  }
}

function nextSong(event) {
  if (event) event.preventDefault();

  const { img, title, author, src } = songs[1];

  figure.src = img;
  sectionTitle.innerHTML = title;
  sectionAuthor.innerHTML = author;
  audio.src = src;

  if (timerWrapper && dataTimerBar) {
    dataTimerBar.style.width = "";
  }
}

function prevSong(event) {
  if (event) event.preventDefault();

  loadSong(songs[0]);

  if (timerWrapper && dataTimerBar) {
    dataTimerBar.style.width = "";
  }
}

function loadSong() {
  const { img, title, author, src } = songs[0];

  figure.src = img;
  sectionTitle.innerHTML = title;
  sectionAuthor.innerHTML = author;
  audio.src = src;
}

function progressBar() {
  let currentTime = audio.currentTime;
  let duration = isNaN(audio.duration) ? 0 : audio.duration;

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime - minutes * 60);

  const minutesValue = minutes.toString().padStart(2, "0");
  const secondsValue = seconds.toString().padStart(2, "0");

  const mediaTime = `${minutesValue}:${secondsValue}`;

  if (timer) {
    timer.innerText = mediaTime;
  }

  if (timerWrapper && dataTimerBar) {
    const barLength = timerWrapper.clientWidth * (currentTime / duration);
    dataTimerBar.style.width = `${barLength}px`;
  }
}

function advanceProgressBar(event) {
  if (event) event.preventDefault();

  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;

  if (isNaN(duration) || duration === 0) return;

  audio.currentTime = (clickX / width) * duration;

  progressBar();
}

function formatProgress() {
  let duration = isNaN(audio.duration) ? 0 : audio.duration;
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration % 60);

  return (endTime.innerHTML = `${min}:${sec < 10 ? "0" : ""}${sec}`);
}

if (Array.isArray(events) && events.length > 0) {
  events.forEach((eventType) => {
    btnPlayPause.addEventListener(eventType, playPauseMusic);
    fwd.addEventListener(eventType, nextSong);
    rwd.addEventListener(eventType, prevSong);
    timerWrapper.addEventListener(eventType, advanceProgressBar);
    audio.addEventListener("ended", endedMusic);
    audio.addEventListener("timeupdate", progressBar);
    audio.addEventListener("loadedmetadata", formatProgress);
  });
}
loadSong(currentSongIndex);
