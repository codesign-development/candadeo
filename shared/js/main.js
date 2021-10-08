scrollMobile()
hackSlides()

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

init()


function init() {

    $("#btn-finalizar").hide()

    //openFullscreen()

}




/* View in fullscreen */
function openFullscreen() {

    if (elem.requestFullscreen) {
        elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
}


// slider

var slider = document.querySelector('#slider');
var content = slider.querySelector('#content');
var prevScroll = slider.querySelector('#izqArrow');
var nextScroll = slider.querySelector('#derArrow');
var finalizar = slider.querySelector('#btn-finalizar');
var childWidth = slider.querySelector('.child').clientWidth;
var test = "";
var shuffleDrags = "";
var counter = 1;

//control Flags
var isPlayingWebGL = false;
var isLastSlide = false
var chunkDataForLMS = ""
var playingInFullScreen = false
var isActiveLastSlide = false

function scrollToNextItem(e) {

    $(".btn-test").css("display", "none"); // temporal
    if ($(".play-btn").hasClass("d-none")) {
        $(".play-btn").removeClass("d-none")
        $(".vidSig").css("display", "none")
    }

    var some = $(e).siblings("#content")

    var idActual = some[0].children[counter].id;
    console.log(idActual);

    

    if (idActual == "despedida") {

        if (!isActiveLastSlide) {
            let SD = window.parent
            let imported = document.createElement("script")
            imported.src = "../scormdriver/auto-scripts/AutoCompleteSCO.js"
            document.head.appendChild(imported)
            SD.SetPassed()
            isActiveLastSlide = true
        }
    }

    if (idActual.includes("video-cont") || idActual.includes("webgl") || idActual.includes("examen")) {
        if ($("#" + idActual).hasClass("visto")) {
            $('#derArrow').removeClass("unactive")
            $('#derArrow').addClass("active")
            console.log("visto")
        } else if ($("#" + idActual).hasClass("noVisto")) {
            $('#derArrow').removeClass("active")
            $('#derArrow').addClass("unactive")
            console.log("novisto")
        }
    }

    if (some[0].children[counter].id == "webgl") {
        isPlayingWebGL = true
        if (!$("#point-cont").hasClass("invisible")) {
            $("#point-cont").addClass("invisible")
        }
    } else {
        if ($("#point-cont").hasClass("invisible") && some[0].children[counter].id.includes("video")) {
            $("#point-cont").removeClass("invisible")
        }
    }

    counter += 1
    if (content.scrollLeft < (content.scrollWidth - childWidth)) {

        // The scroll position is not at the beginning of last item
        content.scrollBy({
            left: childWidth,
            top: 0,
            behavior: 'auto'
        });
        prevScroll.classList.remove("noVes");
        prevScroll.classList.add("siVes");
        $(".exSig").css("display", "none");
        $(".resReset").css("opacity", "100%");

        // Oculta el icono y el color del examen cuando clickeas la flecha derecha

        answerClear()


    } else
    // Last item reached. Go back to first item by setting scroll position to 0
        content.scrollTo({
        left: 0,
        top: 0,
        behavior: 'auto'
    });

    if (some[0].children[counter].id == "nulo" && ($(nextScroll).hasClass("siVes"))) {
        nextScroll.classList.remove("siVes");
        nextScroll.classList.add("noVes");
        if (!$("#point-cont").hasClass("invisible")) {
            $("#point-cont").addClass("invisible")
        }
    }
}


// Función general de navegación con validación left direction

function scrollToPrevItem(e) {

    if ($(".play-btn").hasClass("d-none")) {
        $(".play-btn").removeClass("d-none")
        $(".vidSig").css("display", "none")
    }
    counter -= 1
    if (counter != 0) {
        var some = $(e).siblings("#content")
            //console.log(counter,"counter")
        console.log(some[0].children[counter - 1].id)
        nextScroll.classList.remove("noVes");
        nextScroll.classList.add("siVes");
        
        // Oculta el icono y el color del examen cuando clickeas la flecha izquierda

        answerClear()

    }

    var idActual = some[0].children[counter - 1].id;
    console.log(idActual);
    if (idActual.includes("video-cont") || idActual.includes("webgl") || idActual.includes("examen")) {

        if ($("#" + idActual).hasClass("visto")) {
            $('#derArrow').removeClass("unactive")
            $('#derArrow').addClass("active")
            console.log("visto")
        } else if ($("#" + idActual).hasClass("noVisto")) {
            $('#derArrow').removeClass("active")
            $('#derArrow').addClass("unactive")
            console.log("novisto")
        }
    }

    if (some[0].children[counter - 1].id == "bienvenida" && ($(prevScroll).hasClass("siVes"))) {
        prevScroll.classList.remove("siVes");
        prevScroll.classList.add("noVes");
        $('#derArrow').removeClass("unactive")
        $('#derArrow').addClass("active")
        if (!$("#point-cont").hasClass("invisible")) {
            $("#point-cont").addClass("invisible")
        }
    }

    if ($("#point-cont").hasClass("invisible") && some[0].children[counter - 1].id.includes("video")) {
        $("#point-cont").removeClass("invisible")
    }

    if (content.scrollLeft != 0) {
        // The scroll position is not at the beginning of first item
        content.scrollBy({
            left: -childWidth,
            top: 0,
            behavior: 'auto'
        });
    }
}

//  Progress bullets

// Bullets ----> array
const bullets = [...document.querySelectorAll('.point')];

const maxSlides = 19;
let currentSlide = 1;

// Active dots
nextScroll.addEventListener('click', () => {
    bullets[currentSlide - 0].classList.add('checked');
    currentSlide += 1;
    // prevScroll.disabled  =  false;
    console.log(currentSlide)
});



finalizar.addEventListener('click', () => {

    
    let SD = window.parent
    let imported = document.createElement("script")
    imported.src = "../scormdriver/auto-scripts/AutoCompleteSCO.js"
    document.head.appendChild(imported)  


    
    SD.SetPassed()
    setTimeout(() => {
        close()
    }, 200);

    //Recarga el documento al inicio al detectar el último div nulo.
    // document.location.reload();
});

// Unactive dots
prevScroll.addEventListener('click', () => {
    bullets[currentSlide - 1].classList.remove('checked');
    currentSlide -= 1;
    nextScroll.disabled = false;
    if (currentSlide === 1) {
        prevScroll.disabled = true;
        console.log("desahibilitado principio");
    }
});

//Examen

/* function listenersEx(){
    examenRes.addEventListener('click', badRes)
} */
let count = 0;
function badRes (e){
    if (e.target.classList.contains('exIncorrecto')){
        count++
        console.log(`slide:${currentSlide}`)
       
    }
    resetExamen()
}
//const msjExam = document.querySelector('.exTitle')
function resetExamen(){
    let retro = 0
    if(count == 1){
       firstStrike()
    }

    if (count == 2) {
        secondStrike()
    }

    if(count >= 3){

        thirdStrike()
        retro = currentSlide-7
        content.scrollBy({
            left: -childWidth * retro,
            top: 0,
            behavior: 'auto'
        })
        console.log('reset examen')
        count = 0
        console.log(retro);
        

        currentSlide = 7
        counter = 7
        blockExamArrows()
        answerClear()
        strikeReset()
        examCoolDown()
    }
}

function blockExamArrows() {
        $(".examenChild").removeClass("visto");
        $(".examenChild").addClass("noVisto");
        $('#derArrow').removeClass("active")
        $('#derArrow').addClass("unactive")
}


function firstStrike() {
    $(".1st").css("background-position","bottom");
}

function secondStrike() {
    $(".2nd").css("background-position","bottom");
}

function thirdStrike() {
    $(".3rd").css("background-position","bottom");
}

function strikeReset() {
    $(".exDad").css("pointer-events","none");
    setTimeout(function (){ 
            $(".strike").css("background-position","top");
    }, 500);
}

function examCoolDown() {
    setTimeout(function (){ 
        $(".exDad").css("pointer-events","all");
    }, 1000);  
}

// Muestra icono y color de correcto o incorrectos de examen


function answerAnim() {
    $(".exCorrecto").css("transition","0.5s");
    $(".exCorrecto").css("background-size","40%");
    $(".exCorrecto").css("background-color","rgba(9, 139, 4, .6)");
    $(".exIncorrecto").css("transition","0.5s");
    $(".exIncorrecto").css("background-size","40%");
    $(".exIncorrecto").css("background-color","rgba(184, 17, 5, .6)");
}

function answerClear() {
        $(".exCorrecto").css("transition","0s");
        $(".exCorrecto").css("background-size","0%");
        $(".exCorrecto").css("background-color","rgba(9, 139, 4, 0)");
        $(".exIncorrecto").css("transition","0s");
        $(".exIncorrecto").css("background-size","0%");
        $(".exIncorrecto").css("background-color","rgba(184, 17, 5, 0)");
}

 $(".res1").on("click", function(e) {
    //  $(".res1").css("opacity", "50%");
     $(".exSiguiente1").css("display", "block");
     $("#examen1").addClass("visto");
     $("#examen1").removeClass("noVisto");
     $('#derArrow').removeClass("unactive");
     $('#derArrow').addClass("active");
     answerAnim()
     badRes(e)
 });
 $(".res2").on("click", function(e) {
    //  $(".res2").css("opacity", "50%");
     $(".exSiguiente2").css("display", "block");
     $("#examen2").addClass("visto");
     $("#examen2").removeClass("noVisto");
     $('#derArrow').removeClass("unactive");
     $('#derArrow').addClass("active");
     answerAnim()
     badRes(e)
 });
 $(".res3").on("click", function(e) {
    //  $(".res3").css("opacity", "50%");
     $(".exSiguiente3").css("display", "block");
     $("#examen3").addClass("visto");
     $("#examen3").removeClass("noVisto");
     $('#derArrow').removeClass("unactive");
     $('#derArrow').addClass("active");
     answerAnim()
     badRes(e)
 });
 $(".res4").on("click", function(e) {
    //  $(".res4").css("opacity", "50%");
     $(".exSiguiente4").css("display", "block");
     $("#examen4").addClass("visto");
     $("#examen4").removeClass("noVisto");
     $('#derArrow').removeClass("unactive");
     $('#derArrow').addClass("active");
     answerAnim()
     badRes(e)
 });
 $(".res5").on("click", function(e) {
    //  $(".res5").css("opacity", "50%");
     $(".exSiguiente5").css("display", "block");
     $("#examen5").addClass("visto");
     $("#examen5").removeClass("noVisto");
     $('#derArrow').removeClass("unactive");
     $('#derArrow').addClass("active");
     answerAnim()
     badRes(e)
 });
 $(".res6").on("click", function(e) {
    // $(".res6").css("opacity", "50%");
    $(".exSiguiente6").css("display", "block");
    $("#examen6").addClass("visto");
    $("#examen6").removeClass("noVisto");
    $('#derArrow').removeClass("unactive");
    $('#derArrow').addClass("active");
    answerAnim()
    badRes(e)
});
$(".res7").on("click", function(e) {
    // $(".res7").css("opacity", "50%");
    $(".exSiguiente7").css("display", "block");
    $("#examen7").addClass("visto");
    $("#examen7").removeClass("noVisto");
    $('#derArrow').removeClass("unactive");
    $('#derArrow').addClass("active");
    answerAnim()
    badRes(e)
});

// Audio Trivia Start
function audioTrivia(){
    let triviaAudio = $("#audioTrivia")
    triviaAudio[0].play()
}

// Audio Correcto
function audioGood(){
    let correctAudio = $("#audioGood")
    correctAudio[0].play()
}

// Audio Incorrecto
function audioBad(){
    let incorrectAudio = $("#audioBad")
    incorrectAudio[0].play()
}

// Popups Trivia Random

function shuffleElements(parent) {
    shuffleDrags = $(parent).children()
    shuffleDrags = shuffleDrags.sort(function() {
        return (Math.round(Math.random()) - 0.5);
    });
    $(parent).html(shuffleDrags)
}

//Funciónes Trivia Respuestra

function good(){
    if ($(".icon").hasClass("good")){
        $(".iconCont").css("background-color","rgba(0, 255, 0, 0.5)")
        $(".goodIcon").css("background-color","#6bc310")
        $(".badIcon").css("background-color","rgb(255, 0, 0)")
        $(".icon").css("pointer-events", "none")
        showSuper()
        audioGood()
    }
}

function bad() {
    if ($(".icon").hasClass("bad")){
        $(".iconCont").css("background-color","rgba(255, 0, 0, 0.5)")
        $(".goodIcon").css("background-color","#6bc310")
        $(".badIcon").css("background-color","rgb(255, 0, 0)")
        $(".icon").css("pointer-events", "none")
        showSuper()
        audioBad()
    }
}

//Función continuar

const continueVideo = (e) => {

    let videoCurrent = $(e).siblings().siblings()
    let temp = $(videoCurrent).children("video")
    let temp2 = $(e).attr("data-seek")
    let slideCurrent = $(e).parent()
    temp[0].currentTime = temp2
    temp[0].play()
    slideCurrent.addClass("visto")
    slideCurrent.removeClass("noVisto")
    nextScroll.classList.remove("noVes");
    nextScroll.classList.add("siVes");
    $(".trivia").addClass("d-none")
    $(e).addClass("d-none")
    $(".goodIcon").css("background-color","#0c2999")
    $(".badIcon").css("background-color","#0c2999")
    $(".iconCont").css("background-color","")
    $(".superWrap").addClass("d-none")
    $(".btn-next").addClass("refreshBlock")
    // $("#superVideo5").css("display","none")
    $("#superVideoSpecial").css("display","none")
    resetGameAlert ()
    
}
// Función resetTag

const resetVideo = (e) => {

    let videoCurrent1 = $(e).siblings()
    let temp3 = $(videoCurrent1).children("video")
    let temp4 = $(e).attr("data-seek")
    temp3[0].currentTime = temp4
    temp3[0].play()
    $(".goodIcon").css("background-color","#0c2999")
    $(".badIcon").css("background-color","#0c2999")
    $(".iconCont").css("background-color","")
    $(".trivia").addClass("d-none")
    $(".btn-next").addClass("d-none")
    $(".btn-next").addClass("refreshBlock")
    $(".vidSig").css("display", "none")
    $(".vidBad").css("background-position", "0px")
    $(".vidGood").css("background-position", "0px")
    $(".icon").css("pointer-events", "all")
    $(".superWrap").addClass("d-none")
    $('#superVideoSpecial').css("display","none")
    $(".instruccion2").addClass("d-none")
    resetGameAlert ()
    
}

// Ocultar instrucciones cuando clickees una alerta

$(".iconCont2").click(function ocultaInstru() {
    $(".instruccion1").addClass("d-none")
    $(".instruccion2").addClass("d-none")
});


// Funcion para scrollear al fondo de la pag en mobile

function scrollMobile() {
    
    if ($(window).width() < 832 ) {

        $("html, body").animate({ scrollTop: $(window).height()}, 1000);
    }
}


// hack para ver slides

function hackSlides(){
     $(".child").addClass("visto")
    $(".child").removeClass("novisto")
 }

 function showSuper(){

    setTimeout(function (){

        $(".superWrap").removeClass("d-none")
        $(".btn-next").removeClass("d-none")
        unlockBtn()
    },2000);
    
 }

 function unlockBtn(){

    setTimeout(function () {
        
        $(".btn-next").removeClass("refreshBlock");

    }, 5000);
}