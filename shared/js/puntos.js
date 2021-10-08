       

// Contador de chequeos en 0

let progressCount = 0;

// Funcion que prende el timeline

    if ($(".iconCont2").hasClass("active2")) {

        
        $(".iconCont2").click(function vePrendiendo() {

				$(this).addClass("cleared");
                $(this).removeClass("active2");
                $(".btn-reset").addClass("refreshBlock");
            
                progressCount++;
                console.log("numero de alertas apagadas =" + " " + progressCount)

// Se muestran el avance de la progress bar y los tooltips

                if (progressCount == 1) {
                            
                    $(".light1").addClass("clearLight");
                    $(".tooltipCont1").removeClass("toolHide");

                }
                else if (progressCount == 2) {
                    
                    $(".tooltipCont1").addClass("toolHide");
                    $(".light2").addClass("clearLight");
                    $(".chunk1").addClass("clearChunk");
                    $(".tooltipCont2").removeClass("toolHide");
                } 
                else if (progressCount == 3) {
                    
                    $(".tooltipCont2").addClass("toolHide");
                    $(".light3").addClass("clearLight");
                    $(".chunk2").addClass("clearChunk");
                    $(".tooltipCont3").removeClass("toolHide");
				} 
				else if (progressCount == 4) {
                    
                    $(".tooltipCont3").addClass("toolHide");
                    $(".light4").addClass("clearLight");
                    $(".chunk3").addClass("clearChunk");
                    $(".tooltipCont4").removeClass("toolHide");
				} 
				else if (progressCount == 5) {
                    
                    $(".tooltipCont4").addClass("toolHide");
                    $(".light5").addClass("clearLight");
                    $(".chunk4").addClass("clearChunk");
                    $(".tooltipCont5").removeClass("toolHide");
				} 
				else if (progressCount == 6) {
                    
                    $(".tooltipCont5").addClass("toolHide");
                    $(".light6").addClass("clearLight");
                    $(".chunk5").addClass("clearChunk");
                    $(".tooltipCont6").removeClass("toolHide");
				} 
				else if (progressCount == 7) {
                    
                    $(".tooltipCont6").addClass("toolHide");
                    $(".light7").addClass("clearLight");
                    $(".chunk6").addClass("clearChunk");
                    $(".tooltipCont7").removeClass("toolHide");
                } 
        });

        // SetTimeOut para desbloquear el siguiente alert y hacer delay en los glows



    //     $(".iconCont2").click(function(){  
                 
    //             console.log("click en tool tip");
    //             switchDelay( this );             
    //          });



    //   function switchDelay( currentAlert ) {
          
    //     switch( currentAlert ) {

    //         case 'short':

    //           setTimeout(function delayGlow1( currentAlert ) {
                  
    //                 console.log("tooltip corto");
    //                 prendeDespues( currentAlert );
    //             }, 6,000);
    //          break;

    //         case 'long':
             
    //             setTimeout(function delayGlow2( currentAlert ) {
                  
    //                 console.log("tooltip largo");
    //                 prendeDespues( currentAlert );
    //             }, 11,000);
    //          break;

    //         default:
 
    //        }    
    //   }  
        

    //   function prendeDespues(currentAlert) {
          
    //     currentAlert.removeClass("current");
    //     currentAlert.next().addClass("current");
    //     currentAlert.next().removeClass("standBy");
    //     currentAlert.next().addClass("active2");
    //     $(".btn-reset").removeClass("refreshBlock");
    //   }
         

        $(".iconCont2").click(function(){       
            delayGlow( $(this) );             
         });

         function delayGlow(currentAlert) {

            if (currentAlert.hasClass("short")) {

                setTimeout(function prendeDespues() { 

                    currentAlert.removeClass("current");
                    currentAlert.next().addClass("current");
                    currentAlert.next().removeClass("standBy");
                    currentAlert.next().addClass("active2");
                    $(".btn-reset").removeClass("refreshBlock");
                }, 5000);
                
            } else {

                setTimeout(function prendeDespues() { 

                    currentAlert.removeClass("current");
                    currentAlert.next().addClass("current");
                    currentAlert.next().removeClass("standBy");
                    currentAlert.next().addClass("active2");
                    $(".btn-reset").removeClass("refreshBlock");
                }, 10000);
                
            }
            
            
        }  

    }

     // Se muestra el Boton de continuar y el super con retroalimentacion cuando todos los iconos ya han sido clickeados

     $(".lastCheck").click(function clearCheck() {
        $(".btn-reset").addClass("refreshBlock")
        delaySuper( $(this) );  

    });

    function delaySuper(lastAlert){

        if( lastAlert.hasClass("short") ){
            console.log("short")
            setTimeout(function(){ 

                $(".btn-next").removeClass("d-none")
                $(".superWrap").removeClass("d-none")
                $(".btn-reset").removeClass("refreshBlock");
                unlockBtn()

             }, 5000);
        } else{
            console.log("long")
            setTimeout(function(){ 
                
                $(".btn-next").removeClass("d-none")
                $(".superWrap").removeClass("d-none")
                $(".btn-reset").removeClass("refreshBlock");
                unlockBtn()

             }, 10000);
        }
    }

	//Resetea a su estado original el timeline

    function resetGameAlert () { 
		progressCount = 0
		$(".alertGameCont").addClass("d-none")
		$(".iconCont2").removeClass("cleared")
        $(".iconCont2").removeClass("active2")
        $(".iconCont2").removeClass("current")
		$(".iconCont2").addClass("standBy")
		$(".firstCheck").removeClass("standBy")
        $(".firstCheck").addClass("active2")
        $(".firstCheck").addClass("current")
		$(".info").addClass("toolHide")
		let lightDad = $(".lightbg").children()
		lightDad.removeClass("clearLight")
		let chunkDad = $(".chunkCont").children()
		let chunkDad2 = $(".chunkCont1").children()
		chunkDad.removeClass("clearChunk")
		chunkDad2.removeClass("clearChunk")
	}

    function unlockBtn(){

        setTimeout(function () {
            
            $(".btn-next").removeClass("refreshBlock");

        }, 5000);
    }
    








   
