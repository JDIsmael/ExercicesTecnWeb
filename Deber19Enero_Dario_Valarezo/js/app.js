$(document).ready(function() {

    $("#ejercicio1").click(function() {
        var tam = prompt("Ingrese el tamaño de la matriz");
        var matrix = [];
        for (var i = 0; i < tam; i++) {
            matrix[i] = new Array(tam);
        }


        for (var i = 0; i < matrix.length; i += 1)
            for (var j = 0; j < matrix.length; j += 1)
                matrix[i][j] = prompt("ingrese el dato [" + i + "] [" + j + "]");


        const postData = {
            matrix: matrix,
            opcion: 1
        };
        $.post('php/array.php', postData, (response) => {
            console.log(response[0][0]);
            $('#data').html(response);
        });
    });

    $("#ejercicio2").click(function() {
        var tam = prompt("Ingrese el tamaño de la matriz");
        const postData = {
            tam: tam,
            opcion: 2
        };
        $.post('php/array.php', postData, (response) => {
            $('#data').html(response);
        });
    });
    $("#ejercicio3").click(function() {
        var tam = prompt("Ingrese el tamaño de la matriz");


        const postData = {
            tam: tam,
            opcion: 3
        };
        $.post('php/array.php', postData, (response) => {
            $('#data').html(response);
        });
    });


});