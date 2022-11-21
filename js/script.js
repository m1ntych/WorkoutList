$("ul:not(.days)").on("click", "li:not(.daysOfWeek)", function () {
    $(this).toggleClass("text-decor");

})


$("ul:not(.days)").on("click", "span", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
})

$(".dayMonday").on("click", function () {
    $(".exThursday , .exFriday").css("display", "none");
    $(".inputThursday , .inputFriday").css("display", "none");
    $(".exMonday").css("display", "block");
    $(".inputMonday").css("display", "block");
    $(this).addClass("font-shadow");
    $(".dayFriday , .dayThursday").removeClass("font-shadow");
    $(".dayThursday , .dayFriday").css("text-decoration", "none");
    $(".find_button").css("display", "block")
});

$(".dayThursday").on("click", function () {
    $(".exMonday , .exFriday").css("display", "none");
    $(".inputMonday , .inputFriday").css("display", "none");
    $(".exThursday").css("display", "block");
    $(".inputThursday").css("display", "block");
    $(this).addClass("font-shadow");
    $(".dayFriday , .dayMonday").removeClass("font-shadow");
    $(".dayMonday , .dayFriday").css("text-decoration", "none");
    $(".find_button").css("display", "block")
});

$(".dayFriday").on("click", function () {
    $(".exThursday , .exMonday").css("display", "none");
    $(".inputThursday , .inputMonday").css("display", "none");
    $(".exFriday").css("display", "block");
    $(".inputFriday").css("display", "block");
    $(this).addClass("font-shadow");
    $(".dayThursday , .dayMonday").removeClass("font-shadow");
    $(".dayThursday , .dayMonday").css("text-decoration", "none");
    $(".find_button").css("display", "block")
});

$(".button_confirm").click(function() {
    $(".first_header").remove();
    $(".button_confirm").css("display", "none");
    $(".second_header").fadeIn("fast");
    $(".main").css("display", "block");
})


// $("input").keypress(function(event) {
//     if(event.which === 13) {

//         var itemText = $(this).val();
//         $(this).val("");
//         $("ul:not(.days)").append("<li>" + itemText + "<span><i class='fa-solid fa-delete-left'></i></span></li>");
//     }
// })


// if($(".elOfEx").hasClass("exMonday")) 



// if($(".elOfEx").hasClass("exMonday")){

$('input[class="inputMonday"]').keypress(function (event) {
    if (event.which === 13) {

        var itemText = $(this).val();
        $(this).val("");
        $("ul:not(.exThursday, .exFriday, .days)").append("<li>" + itemText + "<span><i class='fa-solid fa-delete-left'></i></span></li>");
    }
})
$('input[class="inputThursday"]').keypress(function (event) {
    if (event.which === 13) {

        var itemText = $(this).val();
        $(this).val("");
        $("ul:not(.exMonday, .exFriday, .days)").append("<li>" + itemText + "<span><i class='fa-solid fa-delete-left'></i></span></li>");
    }
})
$('input[class="inputFriday"]').keypress(function (event) {
    if (event.which === 13) {

        var itemText = $(this).val();
        $(this).val("");
        $("ul:not(.exThursday, .exMonday, .days)").append("<li>" + itemText + "<span><i class='fa-solid fa-delete-left'></i></span></li>");
    }
})


