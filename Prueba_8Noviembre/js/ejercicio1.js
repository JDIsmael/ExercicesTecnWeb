var tam = prompt("ingrese el numero de datos");
var cont = 1;

var numeros = new Array(tam);
for (var i = 0; i < tam; i++) {
    numeros[i] = new Array(tam);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
for (var i = 0; i < tam; i++)
    for (var j = 0; j < tam; j++) {
        numeros[i][j] = getRandomInt(0, 1000);
        cont++;
    }



for (var i = 0; i < tam; i++) {
    for (var j = 0; j < tam; j++) {
        for (var e = 0; e < (cont.toString().length - numeros[i][j].toString().length); e++)
            document.write("&nbsp;&nbsp;");
        document.write(numeros[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    document.write("</br>");
}


var posicion = prompt("ingrese la posicion la cual quiere el numero");
var numero;
cont = 1;

for (var i = 0; i < tam; i++)
    for (var j = 0; j < tam; j++) {
        numero = numeros[i][j];
        if (cont == posicion) {
            i = tam;
            break;
        }

        cont++;
    }
document.write("El numero es: " + numero + " </br>Tiene " + numero.toString().length + " numeros");