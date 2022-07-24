$(document).ready(function () {
    $("#navbar-toggle").click(function (e) { 
        e.preventDefault();
        $("#responsive-menu").stop().slideToggle();
    });

    function hide_responsive_menu() { 
        $("#responsive-menu").slideUp();
        $("#responsive-menu .sub-menu").slideUp();
        $(".responsive-menu-toggle").removeClass("open");
    }

    //an menu khi resize hoac scroll
    $(window).resize(function () { 
        hide_responsive_menu();
    });

    $(window).scroll(function () { 
        hide_responsive_menu();
    });

    //Show hideen sub-menu responsive
    $(".responsive-menu-toggle").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("open");
        $(this).next(".sub-menu").slideToggle();
    });

});