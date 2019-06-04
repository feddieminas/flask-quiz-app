
// Challenge JQuery Events

$(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card"; // this.id is the id at the ul li (ex. stream-1). Along with having insert a class on each card with extension card 

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight"); //cardhighlight is on css. when are about to select we start with resetting
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight"); // then select our stream one and refer the class there
});

// Challenge JQuery Traverse DOM

//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
		
	});