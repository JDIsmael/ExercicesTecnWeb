function run() {
    var width = 800;
    var height = 622;
    var check = true;
    var escala = 100;


    var opcion = prompt('Escoga una opcion:\n1.- Primer Grado\n2.- Segundo Grado');

    switch (parseInt(opcion)) {
        case 1:
            var a = prompt('Funcion tipo ax + b:\n Ingrese el valor de a:');
            var b = prompt('Funcion tipo ax + b:\n Ingrese el valor de b:');
            check = true;

            break;
        case 2:
            var a = prompt('Funcion tipo ax\u00B2 + bx + c:\n Ingrese el valor de a:');
            var b = prompt('Funcion tipo ax\u00B2 + bx + c:\n Ingrese el valor de b:');
            var c = prompt('Funcion tipo ax\u00B2 + bx + c:\n Ingrese el valor de c:');
            check = false;
            break;

    }

    var cv = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = cv.getContext('2d');
        //Establezco una escala que posteriormente aplico

        //Aquí traslado todo el contexto al centro de la pantalla
        ctx.translate((width / 2), (height / 2));

        //Esta función simplemente dibuja los ejes (es lo de menos)

        //Aquí es donde empiezan los inconvenientes (que más abajo detallo)
        for (var x = -width; x <= width; x = x + 0.01) {
            if (check)
                var y = a * x + b;
            else
                var y = Math.pow(a * x, 2) + b * x + c;
            drawfx(x, y);
        }

        //Pintar los puntos para pintar los valores
        function drawfx(x, y) {

            //Aquí es donde aplico la escala
            x = x * escala;
            y = y * escala;

            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    } else {
        alert("no funciona jaja");
    }



}