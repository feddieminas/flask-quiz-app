//waits until page is ready
$(document).ready(function(){
  
//will need to comment out some code when trying to view effects on theeir own
 

 //hides all panels when a panel is clicked
$(".theButton").click(function(){
  $("#panel .container").siblings().hide();
   })


//hides only the panel that was clicked
  $(".theButton").click(function(){
  $(this).hide();
   })

//adds  a fadeTo to all panels when a panel is clicked
$(".theButton").click(function(){
	$  ("#panel .container").siblings().fadeTo(1000, .5); //they have been hidden before and come back because of the Fadeto. Except one that was clicked
   });


//restores all panels to full opacity when reset button clicked 
$(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);	// when click reset button all shaded boxes from the before fadeto(0.5) becomes back to full (opacity to 1)
   });

//turns panel background black on mouseenter
$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack"); //when hover box becomes black
   });

 //returns to original colour on mouseout 
$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack"); //when unhover box becomes back to original colour
   });


//Last Challenge
      
//will display rgb value of selected panel in the reset panel
 $(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text( col);
   });

});