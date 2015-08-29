$(document).ready(function () {

    var navbar = "#slide-nav";
    var navmenu = "#slidemenu";
    var toggler = ".nav-toggle";
    var pagewrapper = "#page-content";
    var menuwidth = "100%";
    var slidewidth = "80%";
    var menuneg = "-100%";
    var slideneg = "-80%";


    $(toggler).click(function() {
      // $(navbar).toggle("slow");
      //
      var selected = $(this).hasClass("slide-active");

      $(navmenu).stop().animate({
        left: selected ? menuneg : "0px"
      });

      $(this).toggleClass("slide-active", !selected);
      $("#slidemenu").toggleClass("slide-active");
      $("#page-content, .nav, body").toggleClass("slide-active");
    });



});
