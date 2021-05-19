//Acomodo proporcional de las alertas en relacion a su parent

let widthOrigen=window.innerWidth*.6;
let heightOrigen=648;
let percentContain=.5625;
//let percentContain=.5625;


function acomoda(alert) {

    let myPercentL=document.querySelector(alert).getAttribute("percent_l");
    let myPercentT=document.querySelector(alert).getAttribute("percent_t");

    document.querySelector(alert).style.left=Number(myPercentL)+"%";
    document.querySelector(alert).style.top=Number(myPercentT)+"%";
    
}

function cuadroSetup(alert,myAlertCont) {
    //console.log("myAlertCont",myAlertCont)
    if (myAlertCont != undefined){
    let cuadroPosL=document.querySelector(alert).offsetLeft;
    let percentL=(cuadroPosL*100)/myAlertCont.offsetWidth;
    document.querySelector(alert).setAttribute("percent_l",percentL);


    let cuadroPosT=document.querySelector(alert).offsetTop;
    let percentT=(cuadroPosT*100)/myAlertCont.offsetHeight;
    document.querySelector(alert).setAttribute("percent_t",percentT);
   }
}

function ajustaAltoContainer(myAlertCont) {
    let anchoDelContainer;
    
    //console.log("myAlertC",myAlertCont != undefined, typeof myAlertCont == "object", typeof myAlertCont, "object")
    
    if(myAlertCont != undefined && typeof myAlertCont == "object"){
        
        anchoDelContainer=myAlertCont.offsetWidth;
        //console.log("altoRebel",(anchoDelContainer*percentContain)+"px")
        myAlertCont.style.height=(anchoDelContainer*percentContain)+"px";
        //console.log("myAlert",myAlertCont,"anchoContainer",anchoDelContainer,"alto",(anchoDelContainer*percentContain)+"px")
        /*let altoDelContainer=myAlertCont.offsetHeight;
        myAlertCont.style.width=(altoDelContainer*percentContain)+"px";*/
        // console.log("myAlertContPapa",myAlertCont.parentNode);
        // if($(".alertGameCont").is(":visible")){
        //     let altoPapa = myAlertCont.parentNode.offsetHeight;
        //     let altoYo = myAlertCont.offsetHeight;
        //     myAlertCont.style.top = (altoPapa/2 - altoYo/2)+"px";
        //     //console.log($(".alertGameCont").is(":visible"))
        //     //document.querySelector("#content").style.height=(anchoDelContainer*percentContain)+"px";
        // }
   }
    
}


function ini() {
    //Pone las medidas del container por programación
    for(let i in document.querySelectorAll(".alertCont")){
       if(typeof document.querySelectorAll(".alertCont")[i] == "object"){
           console.log("cont", typeof document.querySelectorAll(".alertCont")[i])
           document.querySelectorAll(".alertCont")[i].style.width=widthOrigen+"px";
           let anchoDelContainer=document.querySelectorAll(".alertCont")[i].offsetWidth;
           document.querySelectorAll(".alertCont")[i].style.height=(anchoDelContainer*percentContain)+"px";
           preparaCuadros(document.querySelectorAll(".alertCont")[i]);
           ajustaAltoContainer(document.querySelectorAll(".alertCont")[i]);
       }
    }
    
}

function preparaCuadros(myAlertCont) {
    for(let i in myAlertCont.children){
        let idLocal=myAlertCont.children[i].id;
        //console.log(idLocal, idLocal != undefined)
        if(idLocal != undefined && idLocal.indexOf("alert")>=0){
            //console.log("---",idLocal);
            cuadroSetup("#"+idLocal,myAlertCont);
            acomoda("#"+idLocal);
        }
    }
}

function actualizaCuadros(myAlertCont) {
    for(let i in myAlertCont.children){
        let idLocal=myAlertCont.children[i].id;
        //console.log(idLocal, idLocal != undefined)
        if(idLocal != undefined && idLocal.indexOf("alert")>=0){
           cuadroSetup("#"+idLocal);
           acomoda("#"+idLocal);
        }
    }
}

function windowResize() {
    //widthOrigen = window.innerWidth;
    for(let i in document.querySelectorAll(".alertCont")){
       actualizaCuadros(document.querySelectorAll(".alertCont")[i]);
       ajustaAltoContainer(document.querySelectorAll(".alertCont")[i]);
    }
    
    console.log("resize")
}

window.onresize = windowResize;

