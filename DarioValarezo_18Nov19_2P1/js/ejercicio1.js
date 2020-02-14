var radio;

do {
    radio = prompt("Ingrese el radio en metros: ");
    if (radio <= 0)
        alert("Ingrese numeros positivos");
} while (radio <= 0)

var perimetro = 2 * Math.PI * radio;
var area = Math.PI * Math.pow(radio, 2);
var areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
var volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);


confirm("El perimetro es: " + perimetro + " mts\nEl area es: " + area + " m^2\nEl Area de la esfera es: " + areaEsfera + " m^2\nEl volumen de la esfera es: " + volumenEsfera + " m^3");

function redireccionar() {
    window.location = "../index.html";
}
document.write("<br>Redirigiendo al inicio en 4 segundos...");
setTimeout("redireccionar()", 4000);