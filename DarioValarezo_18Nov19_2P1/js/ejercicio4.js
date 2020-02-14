var numero;
var patt = new RegExp(/^[0-9\s]+$/g);
var arreglo = [];
do {
    numero = prompt("Ingrese cuantos numeros de fibonacci desea (entero positivo)");
    if (!patt.test(numero))
        alert("Ingrese solo numeros enteros positivos");
} while (numero < 0);

for (var i = 0; i < numero; i++)
    if (i == 0)
        arreglo.push(0);
    else if (i == 1)
    arreglo.push(1);
else
    arreglo.push(arreglo[i - 1] + arreglo[i - 2]);

document.write("Los " + numero + " numeros fibonacci Son: </br>");
for (x of arreglo)
    document.write(x + "</br>");

function redireccionar() {
    window.location = "../index.html";
}
document.write("<br>Redirigiendo al inicio en 10 segundos...");
setTimeout("redireccionar()", 10000);