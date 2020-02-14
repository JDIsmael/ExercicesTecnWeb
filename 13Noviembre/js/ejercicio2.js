var cont = 0;
var numeros = new Array(50);
var check = new Boolean(true);
var sum = 0;
do {
    numeros[cont] = prompt("ingrese los numeros:");
    if (numeros[cont] == "") {

    } else
        cont++;
} while (numeros[cont - 1] != undefined);
cont--;
for (var i = 0; i < cont; i++)
    sum += parseInt(numeros[i]);

for (var i = 0; i < cont; i++)
    document.write(numeros[i] + "   ");
document.write("</br> promedio: " + (sum / cont));