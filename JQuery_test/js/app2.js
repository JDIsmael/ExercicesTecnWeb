$(function() {

    $("#boton-bola").on("click", function() {
        $("#bola").animate({ left: '+=150' }, "slow")
            .animate({ top: '+=150' }, "slow")
            .animate({ left: '-=150' }, "slow")
            .animate({ top: '-=150' }, "slow");
    });

});