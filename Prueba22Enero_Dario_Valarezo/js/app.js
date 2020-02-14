$(document).ready(function() {

    $("#button1").prop('disabled', true);
    $("#button2").prop('disabled', true);

    $('#form').submit(e => {
        e.preventDefault();
        const postData = {
            intNumber: $('#intNumber').val(),
            opcion: 3
        };

        $.post('php/app.php', postData, (response) => {

            $('#info').html(response);
        });
        $("#button1").prop('disabled', false);
        $("#button2").prop('disabled', false);
    });


    $("#button1").click(function() {
        const postData = {
            intNumber: $('#intNumber').val(),
            opcion: 0
        };
        $.post('php/app.php', postData, (response) => {
            alert("Datos guardados en archivo resource1.txt");
        });
    });
    $("#button2").click(function() {
        const postData = {
            intNumber: $('#intNumber').val(),
            opcion: 1
        };
        $.post('php/app.php', postData, (response) => {
            alert("Datos guardados en archivo resource2.txt");
        });
        $('#intNumber').val('');
    });

});