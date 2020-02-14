$(document).ready(function() {

    $('#form').submit(e => {
        e.preventDefault();
        const postData = {
            min: $('#min').val(),
            max: $('#max').val(),
            incremento: $('#incremento').val()
        };
        $.post('php/app.php', postData, (response) => {
            $('#table').html(response).show('slow');
        });
    });
});