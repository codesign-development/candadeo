const lanJson = "shared/json/lan.json";
var dataLan = undefined;

var lanSelected = {

    lanIDInternal: "",
    lanIDListener: function(val) {},
    set lanID(val) {
        this.lanIDInternal = val;
        this.lanIDListener(val);
    },
    get lanID() {
        return this.lanIDInternal;
    },
    registerListenerLanID: function(listener) {
        this.lanIDListener = listener;
    },
}

$(".lan-select").on('click', function() {
    selectData(this.id)

    lanSelected.lanID = this.id


});

function loadData() {
    $.ajax({
        url: lanJson,
        method: "get",
        dataType: "json",
        success: function(data) {
            dataLan = data;
        }
    });
}

function selectData(seleccion) {
        
        let selectdata =  null;
        
        switch (seleccion) {
                case 'spa':
                        selectdata = dataLan.Esp
                        break;
                case 'en':
                        selectdata = dataLan.Eng
                        break;
                case 'fr':
                        selectdata = dataLan.Fra
                        break;
                case 'por':
                        selectdata = dataLan.Por
                        break;
                case 'ch':
                        selectdata = dataLan.Chi
                        break;
                default:
                        selectdata = dataLan.Esp
                        break;
        }
        setData(selectdata)
        
}


function setData(data) {

    // Seleccion de idioma        

    let frFraBien = $("<p>" + data.seleccion.frase + "</p>");
    let frBtnBien = $("<p>" + data.seleccion.fraseBtn + "</p>");

    $("#select-language").html("");
    $("#lan-btn").html("");
    $("#select-language").append(frFraBien);
    $("#lan-btn").append(frBtnBien);

    // $("#lan-btn").click(function (data) {
    // });


    // Titulo de curso    

    let tituloCurso = $("<p>" + data.curso.nameCurso + "</p>");

    $("#textTitle").html("");
    $("#textTitle").append(tituloCurso);

    // Bienvenida y Despedida           

    let mensajeBien1 = $("<p" + " " + "class" + "=" + " 'txt-title border-red' " + ">" + data.bienvenida.bien1 + "</p>");
    let mensajeBien2 = $("<p" + " " + "class" + "=" + "txt-p" + ">" + data.bienvenida.bien2 + '<br>' + data.bienvenida.bien3 + "</p>");

    $("#welcomeTxt").html("");
    $("#welcomeTxt").append(mensajeBien1);
    $("#welcomeTxt").append(mensajeBien2);

    let mensajeDesp1 = data.despedida.desp1;
    let mensajeDesp2 = data.despedida.desp2 + '<br>' + data.despedida.desp3 + "<br>" + data.despedida.desp4;

    $(".bye-title").html("").append(mensajeDesp1);
    $(".txt-d").html("").append(mensajeDesp2);
    // Titulos de los childrens(videos, interactivo y Examen)  

    let vidTit1 = $("<p>" + data.titulos.v1 + "</p>");
    let vidTit2 = $("<p>" + data.titulos.v2 + "</p>");
    let vidTit3 = $("<p>" + data.titulos.v3 + "</p>");
    let vidTit4 = $("<p>" + data.titulos.v4 + "</p>");
    let vidTit5 = $("<p>" + data.titulos.v5 + "</p>");
    let vidTit6 = $("<p>" + data.titulos.v6 + "</p>");
    let vidTit7 = $("<p>" + data.titulos.v7 + "</p>");
    let actTit12 = $("<p>" + data.titulos.a12 + "</p>");

    $(".videoTitle").html("");
    $("#videoTitle").append(vidTit1);
    $("#vTitle2").append(vidTit2);
    $("#vTitle3").append(vidTit3);
    $("#vTitle4").append(vidTit4);
    $("#vTitle5").append(vidTit5);
    $("#vTitle6").append(vidTit6);
    $("#vTitle7").append(vidTit7);
    $(".actFinal").append(actTit12);
 

//    Textos de trivia

    let trivInstru = $("<p>" + data.txtTrivia.instru + "</p>");
    let riesgo1 = $("<p>" + data.iconosTextos.icono1 + "</p>");
    let riesgo2 = $("<p>" + data.iconosTextos.icono2 + "</p>");
    let riesgo3 = $("<p>" + data.iconosTextos.icono3 + "</p>");
    let riesgo4 = $("<p>" + data.iconosTextos.icono4 + "</p>");
    let riesgo5 = $("<p>" + data.iconosTextos.icono5 + "</p>");
    let riesgo6 = $("<p>" + data.iconosTextos.icono6 + "</p>");
    let btnCont = $("<p>" + data.txtTrivia.btnConti + "</p>");

    $(".txt-inst").html("");
    $(".txt-inst").append(trivInstru);
    $(".btn-next").html("");
    $(".btn-next").append(btnCont);
    $(".txtIcon").html("");
    $(".txtIcon1").append(riesgo1);
    $(".txtIcon2").append(riesgo2);
    $(".txtIcon3").append(riesgo3);
    $(".txtIcon4").append(riesgo4);
    $(".txtIcon5").append(riesgo5);
    $(".txtIcon6").append(riesgo6);


    

// Alertas toolTips

    let alertaInstru1 = $("<p>" + data.alertasTextos.alertaInsa + "</p>");
    let alertaInstru2 = $("<p>" + data.alertasTextos.alertaInsb + "</p>");
    let tool1 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta1a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta1b + "</p>");
    let tool2 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta2a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta2b + "</p>");
    let tool3 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta3a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta3b + "</p>");
    let tool4 = $("<p>" + data.alertasTextos.alerta4 + "</p>");
    let tool5 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta5a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta5b + "</p>");
    let tool6_2 = $("<p>" + data.alertasTextos.alerta6_2 + "</p>");
    let tool6 = $("<p>" + data.alertasTextos.alerta6 + "</p>");
    let tool7 = $("<p>" + data.alertasTextos.alerta7 + "</p>");
    let tool8 = $("<p>" + data.alertasTextos.alerta8 + "</p>");
    let tool9 = $("<p>" + data.alertasTextos.alerta9 + "</p>");
    let tool10 = $("<p>" + data.alertasTextos.alerta10 + "</p>");
    let tool11 = $("<p>" + data.alertasTextos.alerta11 + "</p>");
    let tool12 = $("<p>" + data.alertasTextos.alerta12 + "</p>");
    let tool13 = $("<p>" + data.alertasTextos.alerta13 + "</p>");
    let tool14 = $("<p>" + data.alertasTextos.alerta14 + "</p>");
    let tool15 = $("<p>" + data.alertasTextos.alerta15 + "</p>");
    let tool16 = $("<p>" + data.alertasTextos.alerta16 + "</p>");
    let tool17 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta17a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta17b + "</p>");
    let tool18 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta18a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta18b + "</p>");
    let tool19 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta19a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta19b + "</p>");
    let tool20 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta20a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta20b + "</p>");
    let tool21 = $("<p>" + data.alertasTextos.alerta21 + "</p>");
    let tool22 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta22a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta22b + "</p>");
    let tool23 = $("<span" + " " + "class" + "=" + " 'hTip' " + ">" + "<h3>" + data.alertasTextos.alerta23a + "</h3>" + "</span>" + "<p>" + data.alertasTextos.alerta23b + "</p>");

    $(".instruccion").html("");
    $(".instruccion1").append(alertaInstru1);
    $(".instruccion2").append(alertaInstru2);
    $(".tooltip").html("");
    $(".t1").append(tool1);
    $(".t2").append(tool2);
    $(".t3").append(tool3);
    $(".t4").append(tool4);
    $(".t5").append(tool5);
    $(".t6_2").append(tool6_2);
    $(".t6").append(tool6);
    $(".t7").append(tool7);
    $(".t8").append(tool8);
    $(".t9").append(tool9);
    $(".t10").append(tool10);
    $(".t11").append(tool11);
    $(".t12").append(tool12);
    $(".t13").append(tool13);
    $(".t14").append(tool14);
    $(".t15").append(tool15);
    $(".t16").append(tool16);
    $(".t17").append(tool17);
    $(".t18").append(tool18);
    $(".t19").append(tool19);
    $(".t20").append(tool20);
    $(".t21").append(tool21);
    $(".t22").append(tool22);
    $(".t23").append(tool23);




    // Super videos

    let vidSup1 = $("<p>" + data.super.sup1 + "</p>");
    let vidSup2 = $("<p>" + data.super.sup2 + "</p>");
    let vidSup3 = $("<p>" + data.super.sup3 + "</p>");
    let vidSup4 = $("<p>" + data.super.sup4 + "</p>");
    let vidSpe = $("<p>" + data.super.supspe + "</p>");
    let vidSup5 = $("<p>" + data.super.sup5 + "</p>");
    let vidSup6 = $("<p>" + data.super.sup6 + "</p>");
    let vidSup7 = $("<p>" + data.super.sup7a + "<ul>" + "<li>" + data.super.sup7b + "</li>" + "<li>" + data.super.sup7c + "</li>" + "<li>" + data.super.sup7d + "</li>" + "</ul>" + "</p>");


    $(".superVideo").html("");
    $("#superVideo1").append(vidSup1);
    $("#superVideo2").append(vidSup2);
    $("#superVideo3").append(vidSup3);
    $("#superVideo4").append(vidSup4);
    $("#superVideoSpecial").append(vidSpe);
    $("#superVideo5").append(vidSup5);
    $("#superVideo6").append(vidSup6);
    $("#superVideo7").append(vidSup7);

    // Flechas textos

    let fleIzq = $("<p" + " " + "class" + "=" + "reg" + ">" + "<i>" + data.flechas.flecha1 + "</i>" + "</p>");
    let fleDer = $("<p" + " " + "class" + "=" + "cont" + ">" + "<i>" + data.flechas.flecha2 + "</i>" + "</p>");

    $(".sig").html("");
    $(".sig").append(fleIzq);
    $(".sig").append(fleDer);

    // Textos examen

    let exaText1 = $("<p>" + data.examen.exa1 + "</p>");
    let exaText2 = $("<p>" + data.examen.exa2 + "</p>");

    $(".exTitle").html("");
    $(".exSig").html("");
    $(".exTitle").append(exaText1);
    $(".exSig").append(exaText2);
}


$(document).ready(function() {
    loadData();
})