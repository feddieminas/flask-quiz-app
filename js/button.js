$(document).ready(function() {
 
 //removes class makeRed, adds class makeBorder on mouseenter
 	$("button").mouseenter(function(){
 	 $(this).removeClass("makeRed").addClass("makeBorder");
  });

 	//reverses above on mouseleave
 	$("button").mouseleave(function(){
 	 $("button").removeClass("makeBorder").addClass("makeRed");
 	});
 	
 	//toggles paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").slideToggle(2000);
 	});
 	
  // 3) hides/shows  paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").hide(2000).show(2000);
 	});
 	
 	// 4) fadeIn and fadoeOut on paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").fadeIn().fadeOut(); //3) and 4) are similar
 	});


}); 
