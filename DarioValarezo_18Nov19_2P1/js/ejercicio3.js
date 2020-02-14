var numero;
var patt = new RegExp(/^[0-9\s]+$/g);
var numerosPrimos = [1];

do {
    numero = prompt("Ingrese un numero entero positivo");
    if (!patt.test(numero))
        alert("Ingrese solo numeros enteros positivos");
} while (numero < 0);

function primo(numero) {
    for (var i = 2; i < numero; i++)
        if (numero % i == 0)
            return false;
    return numero != 1;
}

for (var j = 1; j <= numero; j++)
    if (primo(j))
        numerosPrimos.push(j);

document.write("Los numeros primos hasta " + numero + " Son: </br>");
for (x of numerosPrimos)
    document.write(x + "</br>");



document.write("El numero ingresado es: " + numero);

function redireccionar() {
    window.location = "../index.html";
}
document.write("<br>Redirigiendo al inicio en 4 segundos...");
setTimeout("redireccionar()", 4000);