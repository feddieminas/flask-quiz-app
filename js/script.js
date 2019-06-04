
$(document).ready(function() {
    $(".box").on("click", function() {
        /**
         * When we click on an element that has
         * a 'box' class, this event will be fired.
        */
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0]; //box
        var className = classNames[1]; //one
        if ($(this).css("background-color") == "rgb(255,0,0)") {
            // if this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            // Else turn all elements with a box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to red.
            $("." + boxClass).css("background-color", "#000"); // without it there is no switch between the boxes when one turns red other become black
            $("." + className).css("background-color", "red");
        }

    });
    

/*
$(".box").on("click", function() {
    var classNames = $(this).attr("class").split(" "); // our two classes are assigned to a string box and one. 
    $("." + classNames[1]).css("background-color","red"); // thus you click to a box one and all box ones become red
})
*/

/*
$("p").click(function() {
    $(this).slideToggle('slow');
})

$('button').mouseenter(function() {
    $(this).removeClass('makeRed').addClass('makeBlue');
})

$('button').mouseleave(function() {
    $(this).removeClass('makeBlue').addClass('makeRed');
})
*/


})