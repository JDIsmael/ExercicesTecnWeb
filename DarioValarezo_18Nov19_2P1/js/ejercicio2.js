var radio, anguloRadianes, anguloGrados;
var longitud;
do {
    radio = prompt("Ingrese el radio en metros: ");
    anguloRadianes = prompt("Ingrese el angulo en radianes: ");
    if (radio <= 0 && anguloRadianes <= 0)
        alert("Ingrese solo numeros positivos");
} while (radio <= 0 || anguloRadianes <= 0);

longitud = radio * anguloRadianes;
document.write("Calulo de longitud con Radianes </br>");
document.write("Formula: L&alpha; = R x &alpha;</br>");
document.write("Desarrollo: L&alpha; = " + radio + " x " + anguloRadianes + "</br>");
document.write("Resultado: L&alpha; = " + longitud + " metros</br></br>");

anguloGrados = anguloRadianes * (180 / Math.PI);
document.write("Calulo de longitud con Grados</br>");
document.write("Formula: L&alpha; = (R x &alpha; x 180)/\u03C0</br>");
document.write("Desarrollo: L&alpha;= (" + radio + " x " + anguloGrados + " x 180)/\u03C0</br>");
document.write("Formula: L&alpha;= " + longitud + " metros</br>");




function redireccionar() {
    window.location = "../index.html";
}
document.write("<br>Redirigiendo al inicio en 7 segundos...");
setTimeout("redireccionar()", 7000);