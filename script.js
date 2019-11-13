$(document).ready(function() {
    // my code goes here:
    $(".hamburger a").on("click", function() {
        // do stuff
        $(".mobile-menu").toggleClass("open");
        if ($(".mobile-menu").hasClass("open")) {
            $widthMenu = $(".mobile-menu").width();
            $("main").css("transform", "translateX(260px)");
        } else {
            $("main").css("transform", "");
        }
    });

    $(".abilities").mouseenter(function() {
        $('.scale').css('width', '150%');
        $(".abilities").mouseleave(function() {
            $('.scale').css('width', '');
        });

    });
});