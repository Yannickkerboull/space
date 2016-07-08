/**
 * Created by Yannick on 07/07/2016.
 */

$(document).ready(function() {
    /*
    $("#voiture_simple_").show();
    $("#voiture_results_").hide();
    voiture();
    */
    var continued = true;

    //Partie touche du clavier
    $(document).keydown(function (e) {
        if (continued) {
            if (e.which == 39) {
                vjX = parseInt($('#v1').css('left'));
                if (vjX < 700)
                    $('#v1').css('left', vjX + 30);
            }
            if (e.which == 37) {
                vjX = parseInt($('#v1').css('left'));
                if (vjX > 70)
                    $('#v1').css('left', vjX - 30);
            }
        }
    });
    /*
    Cette méthode est pour si on a 1 points !
    Hors, il faut le faire sur 2 points pour les imgs


    var offset = $( "#tab1" ).offset();
    var offset1 = $( "#erplan" ).offset();
    var offset2 = offset.left - offset1.left;

    //Partie touche de l'appli
    $('#droite').click(function (e) {
        if (continued) {
            vjX = parseInt($('#v1').css('left'));
            if (offset2 < 400)
                $('#v1').css('left', vjX + 30);
        }
    });
    $('#gauche').click(function (e) {
        if (continued) {
            vjX = parseInt($('#v1').css('left'));
            if (vjX > 70)
                $('#v1').css('left', vjX - 30);
        }
    });

    //Partie touche du clavier
    $(document).keydown(function (e) {
        if (continued) {
            if (e.which == 39) {
                vjX = parseInt($('#v1').css('left'));
                if (vjX < 280)
                    $('#v1').css('left', vjX + 30);
            }
            if (e.which == 37) {
                vjX = parseInt($('#v1').css('left'));
                if (vjX > 70)
                    $('#v1').css('left', vjX - 30);
            }
        }
    });
    */


});