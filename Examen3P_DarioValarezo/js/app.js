$(document).ready(function() {


    $("#send").click(function() {
        const postData = {
            name: $('#name').val(),
            email: $('#email').val(),
            cedula: $('#cedula').val()
        };
        if (validaEmpty(postData)) {
            if (validateEmail(postData['email'])) {
                if (validaCedula(postData['cedula'])) {
                    $("#form").submit();
                } else
                    alert('La cedula Debe de contener 10 digitos');
            } else
                alert('El email debe de ser: name@dominio.ext');
        } else
            alert('Debe de rellenar los campos');

    });

    /*
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
        });*/

});