const video = document.querySelector('#video_one>video');
const videoTwo = document.querySelector('#video_two>video');
const videoThree = document.querySelector('#video_three>video');
const videoFour = document.querySelector('#video_four>video');
const videoFive = document.querySelector('#video_five>video');
const videoSix = document.querySelector('#video_six>video');
const videoSeven = document.querySelector('#video_seven>video');

video.addEventListener('play', (event) => {

  video.webkitExitFullscreen();
  video.play()
  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }

  videoTwo.load()
  $('#izqArrow').removeClass("active")
  $('#derArrow').removeClass("active")
  $('#izqArrow').addClass("unactive")
  $('#derArrow').addClass("unactive")
  $('.btn-reset').removeClass("d-none")
  video.addEventListener('timeupdate', (event) => {

    //Pausa en reacción mala
    if (event.target.currentTime >= 16 && event.target.currentTime <= 17) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      video.pause()
      video.webkitExitFullscreen();
      $(".trivia").removeClass("d-none")
      shuffleElements("#iconCont1")
      audioTrivia()
    }

    //Escondido del super antes del final del video
    if (event.target.currentTime >= 29 && event.target.currentTime <= 30) {
      $(".superVideo").css("display", "none")
    }

    //Regreso a la situación original
     if (event.target.currentTime >= 32 && event.target.currentTime <= 33) {
       window.localStorage.setItem("currentTime", event.target.currentTime)
       video.pause()
       video.webkitExitFullscreen();
       $(".vidSig").css("display", "block")
       $(".superVideo").css("display", "none")
       $('#izqArrow').removeClass("unactive")
       $('#derArrow').removeClass("unactive")
       $('#izqArrow').addClass("active")
       $('.btn-next').addClass("d-none")
       $('.btn-reset').addClass("d-none")
       $(".superVideo").css("display", "none")
       $(".icon").css("pointer-events", "all")
       $('#derArrow').addClass("active")
       derArrow.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3');
       video.currentTime = 0
       video.load()
     }
  });
});

// --Ir desbloqueando y adaptando conforme vayamos incorporando los videos-- Inicio

// // //video 2
 videoTwo.addEventListener('play', (event) => {

   video.webkitExitFullscreen();
   videoTwo.play()
   if (!$(".play-btn").hasClass("d-none")) {
     $(".play-btn").addClass("d-none")
   }

   videoThree.load()
   $('#izqArrow').removeClass("active")
   $('#derArrow').removeClass("active")
   $('#izqArrow').addClass("unactive")
   $('#derArrow').addClass("unactive")
   $('.btn-reset').removeClass("d-none")
   videoTwo.addEventListener('timeupdate', (event) => {

//     Pausa en reacción mala
     if (event.target.currentTime >= 18 && event.target.currentTime <= 18.5) {
       window.localStorage.setItem("currentTime", event.target.currentTime)
       videoTwo.pause()
       videoTwo.webkitExitFullscreen();
       $(".trivia").removeClass("d-none")
       shuffleElements("#iconCont2")
       audioTrivia()
     }

     //Escondido del super antes del final del video
    if (event.target.currentTime >= 35 && event.target.currentTime <= 36) {
      $(".superVideo").css("display", "none")
    }

     //Regreso a la situación original
      if (event.target.currentTime >= 38 && event.target.currentTime <= 39) {
        console.log("yes")
        window.localStorage.setItem("currentTime", event.target.currentTime)
        videoTwo.pause()
        videoTwo.webkitExitFullscreen();
        $(".vidSig").css("display", "block")
        $(".superVideo").css("display", "none")
        $('#izqArrow').removeClass("unactive")
        $('#derArrow').removeClass("unactive")
        $('#izqArrow').addClass("active")
        $('.btn-reset').addClass("d-none")
        $(".icon").css("pointer-events", "all")
        $(".superVideo").css("display", "none")
        $('#derArrow').addClass("active")
        $('.btn-next').addClass("d-none")
        derArrow.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3');
        videoTwo.currentTime = 0
        videoTwo.load()
      }
   });
 });

// //video 3
videoThree.addEventListener('play', (event) => {

  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }

  videoFour.load()
  $('#izqArrow').removeClass("active")
  $('#derArrow').removeClass("active")
  $('#izqArrow').addClass("unactive")
  $('#derArrow').addClass("unactive")
  $('.btn-reset').removeClass("d-none")
  videoThree.addEventListener('timeupdate', (event) => {

    //Pausa principal 1era
    if (event.target.currentTime >= 21 && event.target.currentTime <= 21.5) {
      console.log("yes")
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoThree.pause()
      videoThree.webkitExitFullscreen();
      $(".alertCont").css("background-image", 'url(./shared/img/tablero.jpg)'); 
      $(".instruccion1").removeClass("d-none")
      $(".alertGameCont").removeClass("d-none")
     
      audioTrivia()
    }

    //Escondido del super antes del final del video
    if (event.target.currentTime >= 39 && event.target.currentTime <= 40) {
      $(".superVideo").css("display", "none")
    }

    //Pausa al final de la situación original
    if (event.target.currentTime >= 42 && event.target.currentTime <= 43) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoThree.pause()
      videoThree.webkitExitFullscreen();
      $(".vidSig").css("display", "block")
      $(".superVideo").css("display", "none")
      $(".good").css("pointer-events", "all")
      $(".bad").css("pointer-events", "all")
      $('#izqArrow').removeClass("unactive")
      $('#derArrow').removeClass("unactive")
      $(".superVideo").css("display", "none")
      $('#izqArrow').addClass("active")
      $('#derArrow').addClass("active")
      $('.btn-next').addClass("d-none")
      derArrow.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3');
      videoThree.currentTime = 0
      videoThree.load()
    }
  });
});

// //video 4
videoFour.addEventListener('play', (event) => {

  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }

  videoFive.load()
  $('#izqArrow').removeClass("active")
  $('#derArrow').removeClass("active")
  $('#izqArrow').addClass("unactive")
  $('#derArrow').addClass("unactive")
  $('.btn-reset').removeClass("d-none")
  videoFour.addEventListener('timeupdate', (event) => {

    //Pausa principal 1era
    if (event.target.currentTime >= 26 && event.target.currentTime <= 27) {
      console.log("yes")
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoFour.pause()
      videoFour.webkitExitFullscreen();
      $(".alertCont").css("background-image", 'url(./shared/img/frente.jpg)'); 
      $(".instruccion2").removeClass("d-none")
      $(".alertGameCont").removeClass("d-none")
      audioTrivia()
    }

    //Escondido del super antes del final del video
    if (event.target.currentTime >= 55 && event.target.currentTime <= 56) {
      $(".superVideo").css("display", "none")
    }

    //Pausa al final de la situación original
    if (event.target.currentTime >= 58 && event.target.currentTime <= 59) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoFour.pause()
      videoFour.webkitExitFullscreen();
      $(".vidSig").css("display", "block")
      $(".superVideo").css("display", "none")
      $(".good").css("pointer-events", "all")
      $(".bad").css("pointer-events", "all")
      $('#izqArrow').removeClass("unactive")
      $('#derArrow').removeClass("unactive")
      $(".superVideo").css("display", "none")
      $('#izqArrow').addClass("active")
      $('#derArrow').addClass("active")
      $('.btn-next').addClass("d-none")
      derArrow.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3');
      videoFour.currentTime = 0
      videoFour.load()
    }
  });
});

// //video 5
videoFive.addEventListener('play', (event) => {

  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }

  videoSix.load()
  $('#izqArrow').removeClass("active")
  $('#derArrow').removeClass("active")
  $('#izqArrow').addClass("unactive")
  $('#derArrow').addClass("unactive")
  $('.btn-reset').removeClass("d-none")
  videoFive.addEventListener('timeupdate', (event) => {

    //Mostrado del superSpecial

    if (event.target.currentTime >= 23 && event.target.currentTime <= 24) {
      $('#superVideoSpecial').css("display","block")
    }

    if (event.target.currentTime >= 29 && event.target.currentTime <= 30) {
      $('#superVideoSpecial').css("display","none")
    }

    //Pausa principal 1era
    if (event.target.currentTime >= 37 && event.target.currentTime <= 38) {
      console.log("yes")
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoFive.pause()
      videoFive.webkitExitFullscreen();
      $('#superVideoSpecial').css("display","none")
      $(".alertCont").css("background-image", 'url(./shared/img/top.jpg)'); 
      $(".instruccion2").removeClass("d-none")
      $(".alertGameCont").removeClass("d-none")
      audioTrivia()
    }

    //Escondido del super antes del final del video
    if (event.target.currentTime >= 70 && event.target.currentTime <= 71) {
      $(".superVideo").css("display", "none")
    }

    //Pausa al final de la situación original
    if (event.target.currentTime >= 73 && event.target.currentTime <= 74) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoFive.pause()
      videoFive.webkitExitFullscreen();
      $(".vidSig").css("display", "block")
      $(".superVideo").css("display", "none")
      $(".good").css("pointer-events", "all")
      $(".bad").css("pointer-events", "all")
      $('#izqArrow').removeClass("unactive")
      $('#derArrow').removeClass("unactive")
      $(".superVideo").css("display", "none")
      $('#izqArrow').addClass("active")
      $('#derArrow').addClass("active")
      $('.btn-next').addClass("d-none")
      derArrow.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3');
      videoFive.currentTime = 0
      videoFive.load()
    }
  });
});

// //video 6
videoSix.addEventListener('play', (event) => {

  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }

  videoSeven.load()
  $('#izqArrow').removeClass("active")
  $('#derArrow').removeClass("active")
  $('#izqArrow').addClass("unactive")
  $('#derArrow').addClass("unactive")
  $('.btn-reset').removeClass("d-none")
  videoSix.addEventListener('timeupdate', (event) => {

    //Pausa principal 1era
    if (event.target.currentTime >= 40 && event.target.currentTime <= 41) {
      console.log("yes")
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoSix.pause()
      videoSix.webkitExitFullscreen();
      $(".alertCont").css("background-image", 'url(./shared/img/top2.jpg)'); 
      $(".instruccion2").removeClass("d-none")
      $(".alertGameCont").removeClass("d-none")
      audioTrivia()
    }

    //Escondido del super antes del final del video
    if (event.target.currentTime >= 79 && event.target.currentTime <= 80) {
      $(".superVideo").css("display", "none")
    }

    //Pausa al final de la situación original
    if (event.target.currentTime >= 82 && event.target.currentTime <= 83) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoSix.pause()
      videoSix.webkitExitFullscreen();
      $(".vidSig").css("display", "block")
      $(".superVideo").css("display", "none")
      $(".good").css("pointer-events", "all")
      $(".bad").css("pointer-events", "all")
      $('#izqArrow').removeClass("unactive")
      $('#derArrow').removeClass("unactive")
      $('#izqArrow').addClass("active")
      $('#derArrow').addClass("active")
      $('.btn-next').addClass("d-none")
      derArrow.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3');
      videoSix.currentTime = 0
      videoSix.load()
    }
  });
});

// //video 7
videoSeven.addEventListener('play', (event) => {

  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }

  $('#izqArrow').removeClass("active")
  $('#derArrow').removeClass("active")
  $('#izqArrow').addClass("unactive")
  $('#derArrow').addClass("unactive")
  $('.btn-reset').removeClass("d-none")
  videoSeven.addEventListener('timeupdate', (event) => {

    //Pausa principal 1era
    if (event.target.currentTime >= 24 && event.target.currentTime <= 25) {
      console.log("yes")
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoSeven.pause()
      videoSeven.webkitExitFullscreen();
      $(".alertCont").css("background-image", 'url(./shared/img/screen.jpg)'); 
      $(".instruccion1").removeClass("d-none")
      $(".alertGameCont").removeClass("d-none")
      audioTrivia()
    }

    //Escondido del super antes del logo Bimbo
    if (event.target.currentTime >= 48 && event.target.currentTime <= 49) {
      $(".superVideo").css("display", "none")
    }


    //Pausa al final de la situación original
    if (event.target.currentTime >= 57.7 && event.target.currentTime <= 58.5) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoSeven.pause()
      videoSeven.webkitExitFullscreen();
      $(".vidSig").css("display", "block")
      $(".superVideo").css("display", "none")
      $(".good").css("pointer-events", "all")
      $(".bad").css("pointer-events", "all")
      $('#izqArrow').removeClass("unactive")
      $('#derArrow').removeClass("unactive")
      $(".superVideo").css("display", "none")
      $('#izqArrow').addClass("active")
      $('#derArrow').addClass("active")
      $('.btn-next').addClass("d-none")
      derArrow.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3');
      videoSeven.currentTime = 0
      videoSeven.load()
    }
  });
});

// --Ir desbloqueando y adaptando conforme vayamos incorporando los videos-- Inicio


const playBtn = (e) => {
  let temp = $(e).siblings()
  let playVideo = document.querySelector("#" + temp[1].id + ">video")
  playVideo.play()
  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }

}