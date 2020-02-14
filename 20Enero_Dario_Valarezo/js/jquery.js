$(document).ready(function() {
    $("#update").prop('disabled', true);
    $("#delete").prop('disabled', true);

    function reset() {
        $('#name').val('');
        $('#surname').val('');
        $('#email').val('');
    }

    function data(opcion) {
        return postData = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            email: $('#email').val(),
            opcion: opcion
        };
    }

    function dataTable() {
        return `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
        `


    }

    $("#save").click(function() {
        $.post('php/crud.php', data(0), (response) => {
            if (response.trim() == 1)
                window.location = "form/success.html";
            else
                window.location = "form/fail.html";

        });
    });
    $("#show").click(function() {
        $.post('php/crud.php', data(4), (response) => {
            $('#table').html(dataTable() + response);

        });
    });
    $("#delete").click(function() {
        $.post('php/crud.php', data(3), (response) => {
            if (response != -1) {
                alert('Elemento eliminado Existosamente...');
                reset();
            } else {
                alert('Ha ocurrido un problema...');
            }
        });
        $("#update").prop('disabled', true);
        $("#delete").prop('disabled', true);
    });
    $("#update").click(function() {
        $.post('php/crud.php', data(1), (response) => {

            if (response != -1) {
                alert('Elemento Actualizado Existosamente...');
                reset();
            } else {
                alert('Ha ocurrido un problema...');
            }
        });
        $("#update").prop('disabled', true);
        $("#delete").prop('disabled', true);
    });
    $("#search").click(function() {
        $.post('php/crud.php', data(2), (response) => {
            if (response != -1) {
                $("#update").prop('disabled', false);
                $("#delete").prop('disabled', false);
                $('#name').val(response.split('-+-')[0]);
                $('#surname').val(response.split('-+-')[1]);
                $('#email').val(response.split('-+-')[2]);
                $('#table').html(dataTable() + response.split('-+-')[3]);
            } else {
                alert('No existen Datos...');
                $('#table').html('');
            }
        });
    });

});