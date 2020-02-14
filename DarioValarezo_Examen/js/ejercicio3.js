var numero = prompt("Ingrese un numero");

function par_o_impar(numero) {
    if (numero % 2 == 0)
        return "PAR";
    else
        return "IMPAR";
}

alert("El numero ingresado es: " + par_o_impar(numero));

function redireccionar() {
    window.location = "http://localhost:8888/DarioValarezo_Examen/";
}
document.write("<br>Redirigiendo al inicio en 4 segundos...");
setTimeout("redireccionar()", 4000);