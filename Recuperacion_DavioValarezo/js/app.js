function run() {
    do {
        var opcion = prompt("Indique que quiere calcular\n1.- Velocidad (mts/s)\n2.- Tiempo (segundos)\n3.- Distancia (mts)\n4.-Salir");
        var velocidad, distancia, tiempo;
        var result;
        switch (parseInt(opcion)) {
            case 1:
                tiempo = prompt('Ingrese el Tiempo (segundos)');
                distancia = prompt('Ingrese la Distancia (mts)');
                if (validateFloat(distancia) && validateFloat(tiempo)) {
                    result = distancia / tiempo;
                    alert('Datos:\nDistancia: ' + distancia + ' mts' + '\nTiempo: ' + tiempo + ' segundos' + '\nLa Velocidad es: ' + result + ' mts/s');
                } else
                    alert('Ingrese bien los datos')
                break;
            case 2:
                velocidad = prompt('Ingrese la velocidad (mts/s)');
                distancia = prompt('Ingrese la Distancia (mts)');
                if (validateFloat(distancia) && validateFloat(velocidad)) {
                    result = distancia / velocidad;
                    alert('Datos:\nDistancia: ' + distancia + ' mts' + '\nVelocidad: ' + velocidad + ' mts/s' + '\nEl Tiempo es: ' + result + ' segundos');
                } else
                    alert('Ingrese bien los datos')
                break;
            case 3:
                tiempo = prompt('Ingrese el Tiempo (segundos)');
                velocidad = prompt('Ingrese la velocidad (mts/s)');

                if (validateFloat(velocidad) && validateFloat(tiempo)) {
                    result = velocidad * tiempo;
                    alert('Datos:\nVelocidad: ' + velocidad + ' mts/s' + '\nTiempo: ' + tiempo + ' segundos' + '\nLa Distancia es: ' + result + ' mts');
                } else
                    alert('Ingrese bien los datos')

                break;

        }

    } while (opcion != 4)

}

run();