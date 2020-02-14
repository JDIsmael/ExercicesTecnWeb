var tam = parseInt(prompt("Ingrese e tamaño n impar:"));
var opcion = prompt("Ingrese la opcion de Impresion: \n1.- Normal\n2.- Al Revez");
var cont = 1;
var aux = 0;
var check = new Boolean(true);
var numeros = new Array(tam);

for (var i = 0; i < tam; i++)
    numeros[i] = new Array(tam);

cont = parseInt(cont);
aux = parseInt(aux);

for (var i = 0; i < tam; i++)
    if (check) {
        for (var j = 0; j < tam; j++)
            numeros[i][j] = cont++;
        aux = cont + tam - 1;
        cont += tam;
        check = false;
    } else {
        for (var j = 0; j < tam; j++)
            numeros[i][j] = aux--;
        check = true;
    }
document.write("Opcion Nº " + opcion + "</br></br>");
if (opcion == 1)
    for (var i = 0; i < tam; i++) {
        for (var j = 0; j < tam; j++) {
            for (var e = 0; e < (cont.toString().length - numeros[i][j].toString().length); e++)
                document.write("&nbsp;&nbsp;");
            document.write(numeros[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        document.write("</br>");
    }
else
    for (var i = tam - 1; i >= 0; i--) {
        for (var j = tam - 1; j >= 0; j--) {
            for (var e = 0; e < (cont.toString().length - numeros[i][j].toString().length); e++)
                document.write("&nbsp;&nbsp;");
            document.write(numeros[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        document.write("</br>");
    }