$(document).ready(function() {

    //INDEXPAGE EFFECTS

    //Changing the opacity of the 3 pictures that can be clicked on.
    $("#listen").mouseover(function() {
        $("#listen").addClass("opacity_change")
    });

    $("#listen").mouseout(function() {
        $("#listen").removeClass("opacity_change")
    });

    $("#blog").mouseover(function() {
        $("#blog").addClass("opacity_change")
    });

    $("#blog").mouseout(function() {
        $("#blog").removeClass("opacity_change")
    });

    $("#whats-on").mouseover(function() {
        $("#whats-on").addClass("opacity_change")
    });

    $("#whats-on").mouseout(function() {
        $("#whats-on").removeClass("opacity_change")
    });


    //changing the font size on the pictures when hovered over.
    $("#listen").mouseenter(function() {
        $("h2").addClass("h2_font_size");
    });

    $("#listen").mouseleave(function() {
        $("h2").removeClass("h2_font_size");
    })

    $("#blog").mouseenter(function() {
        $("h2").addClass("h2_font_size");
    });

    $("#blog").mouseleave(function() {
        $("h2").removeClass("h2_font_size");
    })

    $("#whats-on").mouseenter(function() {
        $("h2").addClass("h2_font_size");
    });

    $("#whats-on").mouseleave(function() {
        $("h2").removeClass("h2_font_size");
    })

    //LIST OF DJS PAGE EFFECTS

    $("#btn1").click(function() {
        $("#p1").slideToggle(500);
        return false;
    });

    $("#btn2").click(function() {
        $("#p2").slideToggle(500);
        return false;
    });

    $("#btn3").click(function() {
        $("#p3").slideToggle(500);
        return false;
    });

    $("#btn4").click(function() {
        $("#p4").slideToggle(500);
        return false;
    });

    $("#btn5").click(function() {
        $("#p5").slideToggle(500);
        return false;
    });

    $("#btn6").click(function() {
        $("#p6").slideToggle(500);
        return false;
    });

    $("#btn7").click(function() {
        $("#p7").slideToggle(500);
        return false;
    });

    $("#btn8").click(function() {
        $("#p8").slideToggle(500);
        return false;
    });

    $("#btn9").click(function() {
        $("#p9").slideToggle(500);
        return false;
    });

    $("#btn10").click(function() {
        $("#p10").slideToggle(500);
        return false;
    });

    $("#btn11").click(function() {
        $("#p11").slideToggle(500);
        return false;
    });

    $("#btn12").click(function() {
        $("#p12").slideToggle(500);
        return false;
    });

    $("#btn13").click(function() {
        $("#p13").slideToggle(500);
        return false;
    });

    $("#btn14").click(function() {
        $("#p14").slideToggle(500);
        return false;
    });

    $("#btn15").click(function() {
        $("#p15").slideToggle(500);
        return false;
    });

    $("#btn16").click(function() {
        $("#p16").slideToggle(500);
        return false;
    });



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