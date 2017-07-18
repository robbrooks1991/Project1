$(document).ready(function() {

    //INDEXPAGE EFFECTS



    //NINAKRAVIZ PAGE 

    //Colour change when hovering over mini navbar
    $("#ninanav1").mouseenter(function() {
        $("#ninanav1").addClass("ninanavhighlight")
    });

    $("#ninanav1").mouseleave(function() {
        $("#ninanav1").removeClass("ninanavhighlight")
    });

    $("#ninanav2").mouseenter(function() {
        $("#ninanav2").addClass("ninanavhighlight")
    });

    $("#ninanav2").mouseleave(function() {
        $("#ninanav2").removeClass("ninanavhighlight")
    });

    $("#ninanav3").mouseenter(function() {
        $("#ninanav3").addClass("ninanavhighlight")
    });

    $("#ninanav3").mouseleave(function() {
        $("#ninanav3").removeClass("ninanavhighlight")
    });

    $("#ninanav4").mouseenter(function() {
        $("#ninanav4").addClass("ninanavhighlight")
    });

    $("#ninanav4").mouseleave(function() {
        $("#ninanav4").removeClass("ninanavhighlight")
    });

    //scroll to specific part of page when button on mininav bar pressed 

    $("#scroll1").click(function() {
        $('html, body').animate({
            scrollTop: $(".biography").offset().top - 60
        }, 1000);
    });

    $("#scroll2").click(function() {
        $('html, body').animate({
            scrollTop: $(".events").offset().top - 60
        }, 1000);
    });

    $("#scroll3").click(function() {
        $('html, body').animate({
            scrollTop: $(".youtube").offset().top - 60
        }, 1000);
    });

    $("#scroll4").click(function() {
        $('html, body').animate({
            scrollTop: $(".soundcloud").offset().top - 60
        }, 1000);
    });

});