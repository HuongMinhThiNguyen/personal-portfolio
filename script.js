$(document).ready(function() {
    // my code goes here:
    $(".hamburger a").on("click", function() {
        // do stuff
        $(".mobile-menu").toggleClass("open");
        if ($(".mobile-menu").hasClass("open")) {
            $widthMenu = $(".mobile-menu").width();
            $("main").css("transform", "translateX($widthMenu)");
        } else {
            $("main").css("transform", "");


        }
    });
});