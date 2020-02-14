var tam = prompt("Ingrese un numero impar:");
var cont = 1;
var aux = tam - 1;
var aux2 = aux;
var check = new Boolean(true);
var numeros = new Array(tam);

for (var i = 0; i < tam; i++)
    numeros[i] = new Array(tam);

for (var i = 0; i < tam; i++)
    for (var j = 0; j < tam; j++)
        numeros[i][j] = 0;


for (var i = 0; i < tam; i++)
    numeros[i][i] = cont++;


for (var i = 0; i < aux; i++) {
    if (i % 2 == 0 && i != 0) {
        for (var j = 0; j < aux - i; j++) {
            numeros[aux2 - 2][aux2 + 1] = cont++;
            aux2--
        }
    } else if (check) {
        for (var j = 0; j < aux - i; j++) {
            numeros[aux2 - 1][aux2] = cont++;
            aux2--
        }
        check = false;

    } else {
        for (var j = 0; j < aux - i; j++) {
            numeros[aux2][aux2 + 2] = cont++;
            aux2++
        }
        check = true;
    }
    imprimir();
}

imprimir();

function imprimir() {
    for (var i = 0; i < tam; i++) {
        for (var j = 0; j < tam; j++) {
            for (var e = 0; e < (cont.toString().length - numeros[i][j].toString().length); e++)
                document.write("&nbsp;&nbsp;");
            document.write(numeros[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        document.write("</br>");
    }
    document.write("</br>");
    document.write("</br>");
}