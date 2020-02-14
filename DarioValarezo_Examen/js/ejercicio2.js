function equivalente_nota(nota) {
    if (nota >= 0 && nota <= 4.99)
        return "Deficiente";
    else if (nota >= 5 && nota <= 7.99)
        return "Suficiente";
    else if (nota >= 8 && nota <= 9.99)
        return "Notable";
    else if (nota == 10)
        return "Sobresaliente";
    else
        return "Nota Mal Ingresada";
}
var notas = new Array(50);
var cont = 0;
do {
    notas[cont] = prompt("Ingrese la nota");
    var strNota = equivalente_nota(notas[cont]);
    if (strNota != "Nota Mal Ingresada") {
        document.write("La nota: " + notas[cont] + " Es un " + strNota + "</br>");
        cont++;
    } else {
        cont -= 1;
        document.write(strNota);
    }
} while (strNota != "Sobresaliente");

function redireccionar() {
    window.location = "http://localhost:8888/DarioValarezo_Examen/";
}
document.write("<br>Redirigiendo al inicio en 4 segundos...");
setTimeout("redireccionar()", 4000);