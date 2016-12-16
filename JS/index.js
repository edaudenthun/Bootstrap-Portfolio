$(function() {
    $("#Rouge").click(function() {

        $("#Home").animate({
            backgroundColor: "#7B151F",
            color: "white"
        }, 1000);

        $("#Navbar li a").css({
            color: "white"
        });
        $("#Navbar .dropdown li a").css({
            color: "black"
        });
        $("#Navbar .dropdown li a").hover(function() {
            $(this).css("background-color", "#7B151F", "color", "#FFFFFF")
        });

        $("#Navbar .dropdown li a").mouseleave(function() {
            $(this).css("background-color", "white", "color", "black")
        });

        $("#Portfolio p, #Portfolio h1").animate({
            color: "white"
        }, 1000);


        $("#About").animate({
            backgroundColor: "#7B151F"
        }, 1000);
        $("#About p, #About h1, #About h2").animate({
            color: "white"
        }, 1000);


        $("#Contact h1, #Contact p").animate({
            color: "white"
        }, 1000);
        $("#Contact form").animate({
            backgroundColor: "#7B151F",
            color: "black"
        }, 1000);

    });



    $("#Green").click(function() {

        $("#Home").animate({
            backgroundColor: "#98C261",
            color: "white"
        }, 1000);

        $("#Navbar li a").css({
            color: "#98C261"
        });
        $("#Navbar .dropdown li a").css({
            color: "black"
        });
        $("#Navbar .dropdown li a").hover(function() {
            $(this).css("background-color", "#98C261", "color", "#FFFFFF")
        });

        $("#Navbar .dropdown li a").mouseleave(function() {
            $(this).css("background-color", "white", "color", "black")
        });

        $("#Portfolio p, #Portfolio h1").animate({
            color: "#98C261"
        }, 1000);


        $("#About").animate({
            backgroundColor: "#98C261"
        }, 1000);
        $("#About p, #About h1, #About h2").animate({
            color: "white"
        }, 1000);


        $("#Contact h1, #Contact p").animate({
            color: "#98C261"
        }, 1000);
        $("#Contact form").animate({
            backgroundColor: "#98C261",
            color: "black"
        }, 1000);

    });

    $("#Depart").click(function() {

        $("#Home").animate({
            backgroundColor: "#26a69a",
            color: "#333333"
        }, 1000);

        $("#Navbar li a").css({
            color: "#26a69a"
        });
        $("#Navbar .dropdown li a").css({
            color: "#333333"
        });
        $("#Navbar .dropdown li a").hover(function() {
            $(this).css("background-color", "#26a69a", "color", "")
        });

        $("#Navbar .dropdown li a").mouseleave(function() {
            $(this).css("background-color", "white", "color", "")
        });

        $("#Portfolio p, #Portfolio h1").animate({
            color: "white"
        }, 1000);


        $("#About").animate({
            backgroundColor: "#26a69a"
        }, 1000);
        $("#About p, #About h1, #About h2").animate({
            color: "#333333"
        }, 1000);


        $("#Contact h1, #Contact p").animate({
            color: "white"
        }, 1000);
        $("#Contact form").animate({
            backgroundColor: "#26a69a",
            color: "#333333"
        }, 1000);
    });

});


$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});

$(document).ready(function() {
    $('body').scrollspy({
        target: 'nav.navbar'
    })
});
