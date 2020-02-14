var numeros = new Array(10);

for (var i = 0; i < 10; i++)
    numeros[i] = prompt("Ingrese el numero " + (i + 1));

for (numero of numeros)
    document.write(numero + "  ");


var texto = "Ingrese el orden\n1.- Ascendente\n2.-Descendente";
var tipo = prompt(texto);

numeros.sort();

if (tipo == 1) {
    numeros.sort();
    document.write("</br>Odenamiento Ascendente</br>");
} else {
    numeros.sort(function(a, b) { return b - a });
    document.write("</br>Odenamiento descendente</br>");
}

for (numero of numeros)
    document.write(numero + "  ");

function redireccionar() {
    window.location = "http://localhost:8888/DarioValarezo_Examen/";
}
document.write("<br>Redirigiendo al inicio en 4 segundos...");
setTimeout("redireccionar()", 4000);