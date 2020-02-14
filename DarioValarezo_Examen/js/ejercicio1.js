var textos = new Array(50);
var cont = 0;
var check = new Boolean(true);
do {
    textos[cont] = prompt("Ingrese el texto");
    if (textos[cont] == undefined) {
        check = false;
        cont -= 1;
    }

    cont++;
} while (check);

for (var i = 0; i < cont; i++)
    document.write(textos[i] + " - ");

function redireccionar() {
    window.location = "http://localhost:8888/DarioValarezo_Examen/";
}
document.write("<br>Redirigiendo al inicio en 4 segundos...");
setTimeout("redireccionar()", 4000);