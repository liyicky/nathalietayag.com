$(function() {
    $(".toggle-nav").click(function() {
        toggleNavigation();
    });
});

function toggleNavigation() {
    if ($("#container").hasClass("display-nav")) {
        $("#container").removeClass("display-nav");
    } else {
        $("#container").addClass("display-nav");
    }
}

$("#toggle > li > div").click(function() {
    if (false == $(this).next().is("visable")) {
        $("#toggle ul").slideUp();
    }

    var $currIcon = $(this).find("span.the-btn");
    $("span.the-btn").not($currIcon).assClass("fa-plus").remove("fa-minus");
    $currIcon.toggleClass("fa-minus fa-plus");

    $(this).next().slideToggle();
    $("#toggle > li > div").removeClass("active");
    $(this).addClass("active");
});
