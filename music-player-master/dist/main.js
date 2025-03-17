/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("var songs = [{\n  title: \"Lost in the city Lights\",\n  author: \"Cosmo Sheldrake\",\n  src: \"resources/lost-in-city-lights-145038.mp3\",\n  img: \"resources/cover-1.jpg\"\n}, {\n  title: \"Forest Lullaby\",\n  author: \"Lesfm\",\n  src: \"resources/forest-lullaby-110624.mp3\",\n  img: \"resources/cover-2.jpg\"\n}];\n\n//Elements\nvar figure = document.querySelector(\".music-player-one img\");\nvar sectionTitle = document.querySelector(\".music-player-one h1\");\nvar sectionAuthor = document.querySelector(\".music-player-one p\");\nvar imgPaused = document.querySelector(\".btn-pause img\");\n\n//Elements-data\nvar dataTimerBar = document.querySelector(\"[data-timer-bar]\");\nvar timerWrapper = document.querySelector(\".elapsed-time\");\nvar timer = document.querySelector(\"[data-start-time]\");\nvar endTime = document.querySelector(\"[data-end-time]\");\n\n//Buttons\nvar rwd = document.querySelector(\"[data-rewind]\");\nvar fwd = document.querySelector(\"[data-advanced]\");\nvar btnPlayPause = document.querySelector(\".btn-pause\");\n\n//Events/touch/click\nvar events = [\"click\", \"touchstart\"];\n\n//Audio\nvar currentSongIndex = 0;\nvar audio = new Audio(songs[currentSongIndex].src);\naudio.onended = function () {\n  return endedMusic(imgPaused, timer, dataTimerBar);\n};\nfunction playPauseMusic(event) {\n  event === null || event === void 0 || event.preventDefault();\n  audio.paused ? (imgPaused.setAttribute(\"src\", \"../music-player-master/resources/play_pause_reverse-1.png\"), audio.play(), progressBar()) : (imgPaused.setAttribute(\"src\", \"../music-player-master/resources/Play_fill.svg\"), audio.pause());\n}\nfunction endedMusic() {\n  if (imgPaused && imgPaused.setAttribute) {\n    imgPaused.setAttribute(\"src\", \"../music-player-master/resources/Play_fill.svg\");\n  }\n  if (timer) {\n    timer.innerHTML = \"00:00\";\n  }\n  if (timerWrapper && dataTimerBar) {\n    dataTimerBar.style.width = \"\";\n  }\n}\nfunction nextSong(event) {\n  event === null || event === void 0 || event.preventDefault();\n  if (imgPaused && imgPaused.setAttribute) {\n    imgPaused.setAttribute(\"src\", \"../music-player-master/resources/Play_fill.svg\");\n  }\n  var _songs$ = songs[1],\n    img = _songs$.img,\n    title = _songs$.title,\n    author = _songs$.author,\n    src = _songs$.src;\n  figure.src = img;\n  sectionTitle.innerHTML = title;\n  sectionAuthor.innerHTML = author;\n  audio.src = src;\n  if (timerWrapper && dataTimerBar) {\n    dataTimerBar.style.width = \"\";\n  }\n}\nfunction prevSong(event) {\n  event === null || event === void 0 || event.preventDefault();\n  loadSong(songs[0]);\n  if (timerWrapper && dataTimerBar) {\n    dataTimerBar.style.width = \"\";\n  }\n}\nfunction loadSong() {\n  var _songs$2 = songs[0],\n    img = _songs$2.img,\n    title = _songs$2.title,\n    author = _songs$2.author,\n    src = _songs$2.src;\n  figure.src = img;\n  sectionTitle.innerHTML = title;\n  sectionAuthor.innerHTML = author;\n  audio.src = src;\n}\nfunction progressBar() {\n  var currentTime = audio.currentTime;\n  var duration = isNaN(audio.duration) ? 0 : audio.duration;\n  var minutes = Math.floor(currentTime / 60);\n  var seconds = Math.floor(currentTime - minutes * 60);\n  var minutesValue = minutes.toString().padStart(2, \"0\");\n  var secondsValue = seconds.toString().padStart(2, \"0\");\n  var mediaTime = \"\".concat(minutesValue, \":\").concat(secondsValue);\n  if (timer) {\n    timer.innerText = mediaTime;\n  }\n  if (timerWrapper && dataTimerBar) {\n    var barLength = timerWrapper.clientWidth * (currentTime / duration);\n    dataTimerBar.style.width = \"\".concat(barLength, \"px\");\n  }\n}\nfunction advanceProgressBar(event) {\n  event === null || event === void 0 || event.preventDefault();\n  var width = this.clientWidth;\n  var clickX = event.offsetX;\n  var duration = audio.duration;\n  if (isNaN(duration) || duration === 0) return;\n  audio.currentTime = clickX / width * duration;\n  progressBar();\n}\nfunction formatProgress() {\n  var duration = isNaN(audio.duration) ? 0 : audio.duration;\n  var min = Math.floor(duration / 60);\n  var sec = Math.floor(duration % 60);\n  return endTime.innerHTML = \"\".concat(min, \":\").concat(sec < 10 ? \"0\" : \"\").concat(sec);\n}\nif (Array.isArray(events) && events.length > 0) {\n  events.forEach(function (eventType) {\n    btnPlayPause.addEventListener(eventType, playPauseMusic);\n    fwd.addEventListener(eventType, nextSong);\n    rwd.addEventListener(eventType, prevSong);\n    timerWrapper.addEventListener(eventType, advanceProgressBar);\n    audio.addEventListener(\"ended\", endedMusic);\n    audio.addEventListener(\"timeupdate\", progressBar);\n    audio.addEventListener(\"loadedmetadata\", formatProgress);\n  });\n} else {\n  console.error(\"Error: The 'events' array is either empty or not defined.\");\n}\nloadSong(currentSongIndex);\n\n//# sourceURL=webpack://music-player-master/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;