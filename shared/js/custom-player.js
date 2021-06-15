const video = document.querySelector('#video_one>video');
const videoTwo = document.querySelector('#video_two>video');
const videoThree = document.querySelector('#video_three>video');
const videoFour = document.querySelector('#video_four>video');
const videoFive = document.querySelector('#video_five>video');
const videoSix = document.querySelector('#video_six>video');
const videoSeven = document.querySelector('#video_seven>video');
const videoEight = document.querySelector('#video_eight>video');
const videoNine = document.querySelector('#video_nine>video');
const videoTen = document.querySelector('#video_ten>video');
const videoEleven = document.querySelector('#video_eleven>video');

video.addEventListener('play', (event) => {

  video.webkitExitFullscreen(); //Para salir de pantalla completa en iOS
  video.play()
  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }
  // Carga video siguiente
  videoTwo.load()
  // Desactiva flechas
  $('#izqArrow').removeClass("active")
  $('#derArrow').removeClass("active")
  $('#izqArrow').addClass("unactive")
  $('#derArrow').addClass("unactive")
  // aparece boton reset
  $('.btn-reset').removeClass("d-none")
  // Función para brincar a cierto segundo
  video.addEventListener('timeupdate', (event) => {

    //Pausa en reacción mala alarma
    if (event.target.currentTime >= 26 && event.target.currentTime <= 27) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      video.pause()
      video.webkitExitFullscreen();
      //Aparece triva
      $(".trivia").removeClass("d-none")
      //Shuffle a respuestas
      shuffleElements("#iconCont1")
      //Reproduce audio Among Us
      audioTrivia()
    }

    //Escondido del super antes del final del video
    /* if (event.target.currentTime >= 29 && event.target.currentTime <= 30) {
      $(".superVideo").css("display", "none")
    } */

    //Pausa cuando termine el video
     if (event.target.currentTime >= 60 && event.target.currentTime <= 61) {
       window.localStorage.setItem("currentTime", event.target.currentTime)
       video.pause()
       video.webkitExitFullscreen();
       //Overlay de siguiente
       $(".vidSig").css("display", "block")
       //Oculta texto de apoyo
       $(".superVideo").css("display", "none")
       //Activa Flechas
       $('#izqArrow').removeClass("unactive")
       $('#derArrow').removeClass("unactive")
       $('#izqArrow').addClass("active")
       //Oculta botones de continuar y reset
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

//video 2
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
     if (event.target.currentTime >= 13 && event.target.currentTime <= 13.5) {
       window.localStorage.setItem("currentTime", event.target.currentTime)
       videoTwo.pause()
       videoTwo.webkitExitFullscreen();
       $(".trivia").removeClass("d-none")
       shuffleElements("#iconCont2")
       audioTrivia()
     }

     /* //Escondido del super antes del final del video solo activar cuando se necesite
    if (event.target.currentTime >= 35 && event.target.currentTime <= 36) {
      $(".superVideo").css("display", "none")
    } */

     //Pausa cuando termine el video
      if (event.target.currentTime >= 31 && event.target.currentTime <= 32) {
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

//Video Tres
videoThree.addEventListener('play', (event) => {

  video.webkitExitFullscreen();
  videoThree.play()
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

//     Pausa en reacción mala
    if (event.target.currentTime >= 18 && event.target.currentTime <= 18.5) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoThree.pause()
      videoThree.webkitExitFullscreen();
      $(".trivia").removeClass("d-none")
      shuffleElements("#iconCont2")
      audioTrivia()
    }

   /* //Escondido del super antes del final del video solo activar cuando se necesite
    if (event.target.currentTime >= 35 && event.target.currentTime <= 36) {
      $(".superVideo").css("display", "none")
    } */

    //Pausa cuando termine el video
     if (event.target.currentTime >= 38 && event.target.currentTime <= 39) {
       console.log("yes")
       window.localStorage.setItem("currentTime", event.target.currentTime)
       videoThree.pause()
       videoThree.webkitExitFullscreen();
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
       videoThree.currentTime = 0
       videoThree.load()
     }
  });
});

//Video 4
videoFour.addEventListener('play', (event) => {

  video.webkitExitFullscreen();
  videoFour.play()
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

//     Pausa en reacción mala
    if (event.target.currentTime >= 26.5 && event.target.currentTime <= 27) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoFour.pause()
      videoFour.webkitExitFullscreen();
      $(".trivia").removeClass("d-none")
      shuffleElements("#iconCont2")
      audioTrivia()
    }

    //Escondido del super antes del final del video solo activar cuando se necesite
    //if (event.target.currentTime >= 58 && event.target.currentTime <= 59) {
    //  $(".superVideo").css("display", "none")
    //} 

    //Pausa cuando termine el video
     if (event.target.currentTime >= 60 && event.target.currentTime <= 61) {
       console.log("yes")
       window.localStorage.setItem("currentTime", event.target.currentTime)
       videoFour.pause()
       videoFour.webkitExitFullscreen();
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
       videoFour.currentTime = 0
       videoFour.load()
     }
  });
});

//Video 5
videoFive.addEventListener('play', (event) => {

  video.webkitExitFullscreen();
  videoFive.play()
  if (!$(".play-btn").hasClass("d-none")) {
    $(".play-btn").addClass("d-none")
  }

  $('#izqArrow').removeClass("active")
  $('#derArrow').removeClass("active")
  $('#izqArrow').addClass("unactive")
  $('#derArrow').addClass("unactive")
  $('.btn-reset').removeClass("d-none")
  videoFive.addEventListener('timeupdate', (event) => {

//     Pausa en reacción mala
    if (event.target.currentTime >= 19 && event.target.currentTime <= 19.5) {
      window.localStorage.setItem("currentTime", event.target.currentTime)
      videoFive.pause()
      videoFive.webkitExitFullscreen();
      $(".trivia").removeClass("d-none")
      shuffleElements("#iconCont2")
      audioTrivia()
    }

   /* //Escondido del super antes del final del video solo activar cuando se necesite
    if (event.target.currentTime >= 35 && event.target.currentTime <= 36) {
      $(".superVideo").css("display", "none")
    } */

    //Regreso a la situación original
     if (event.target.currentTime >= 42 && event.target.currentTime <= 43) {
       console.log("yes")
       window.localStorage.setItem("currentTime", event.target.currentTime)
       videoFive.pause()
       videoFive.webkitExitFullscreen();
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
       videoFive.currentTime = 0
       videoFive.load()
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