var str = prompt("Ingrese una palabra");

document.write("Palabra original: " + str + "</br>");
document.write("Palabra al reves: ");
for (var i = str.length - 1; i >= 0; i--)
    document.write(str.charAt(i));
document.write("</br>");

function redireccionar() {
    window.location = "../index.html";
}
document.write("<br>Redirigiendo al inicio en 7 segundos...");
setTimeout("redireccionar()", 7000);