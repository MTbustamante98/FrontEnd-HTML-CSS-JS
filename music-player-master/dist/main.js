(()=>{var e=[{title:"Lost in the city Lights",author:"Cosmo Sheldrake",src:"resources/lost-in-city-lights-145038.mp3",img:"resources/cover-1.jpg"},{title:"Forest Lullaby",author:"Lesfm",src:"resources/forest-lullaby-110624.mp3",img:"resources/cover-2.jpg"}],t=document.querySelector(".music-player-one img"),r=document.querySelector(".music-player-one h1"),n=document.querySelector(".music-player-one p"),i=document.querySelector(".btn-pause img"),o=document.querySelector("[data-timer-bar]"),a=document.querySelector(".elapsed-time"),c=document.querySelector("[data-start-time]"),s=document.querySelector("[data-end-time]"),u=document.querySelector("[data-rewind]"),l=document.querySelector("[data-advanced]"),d=document.querySelector(".btn-pause"),m=["click","touchstart"],y=new Audio(e[0].src);function f(e){null==e||e.preventDefault(),y.paused?(i.setAttribute("src","/resources/play_pause_reverse-1.png"),y.play(),L()):(i.setAttribute("src","/resources/Play_fill.svg"),y.pause())}function v(){i&&i.setAttribute&&i.setAttribute("src","/resources/Play_fill.svg"),c&&(c.innerHTML="00:00"),a&&o&&(o.style.width="")}function p(c){null==c||c.preventDefault();var s=e[1],u=s.img,l=s.title,d=s.author,m=s.src;t.src=u,r.innerHTML=l,n.innerHTML=d,y.src=m,i&&i.setAttribute&&i.setAttribute("src","/resources/Play_fill.svg"),a&&o&&(o.style.width="")}function h(e){null==e||e.preventDefault(),g(),a&&o&&(o.style.width=""),i&&i.setAttribute&&i.setAttribute("src","/resources/Play_fill.svg")}function g(){var i=e[0],o=i.img,a=i.title,c=i.author,s=i.src;t.src=o,r.innerHTML=a,n.innerHTML=c,y.src=s}function L(){var e=y.currentTime,t=isNaN(y.duration)?0:y.duration,r=Math.floor(e/60),n=Math.floor(e-60*r),i=r.toString().padStart(2,"0"),s=n.toString().padStart(2,"0"),u="".concat(i,":").concat(s);if(c&&(c.innerText=u),a&&o){var l=a.clientWidth*(e/t);o.style.width="".concat(l,"px")}}function S(e){null==e||e.preventDefault();var t=this.clientWidth,r=e.offsetX,n=y.duration;isNaN(n)||0===n||(y.currentTime=r/t*n,L())}function b(){var e=isNaN(y.duration)?0:y.duration,t=Math.floor(e/60),r=Math.floor(e%60);return s.innerHTML="".concat(t,":").concat(r<10?"0":"").concat(r)}y.onended=function(){return v()},Array.isArray(m)&&m.length>0?m.forEach((function(e){d.addEventListener(e,f),l.addEventListener(e,p),u.addEventListener(e,h),a.addEventListener(e,S),y.addEventListener("ended",v),y.addEventListener("timeupdate",L),y.addEventListener("loadedmetadata",b)})):console.error("Error: The 'events' array is either empty or not defined."),g()})();