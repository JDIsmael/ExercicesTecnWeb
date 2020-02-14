function verificarTexto(texto) {
    if (texto.toUpperCase() == texto)
        return true;
    else if (texto.toLowerCase() == texto)
        return false;
    else
        return -1;
}

var patt = new RegExp(/^[A-Za-z\s]+$/g);
var texto;
do {
    texto = prompt("Ingrese un texto");
} while (!patt.test(texto).valueOf());
document.write('El texto "' + texto + '"');

if (verificarTexto(texto) == -1)
    document.write(" Tiene letras MAYUSCULAS y minusculas");
else if (verificarTexto(texto))
    document.write(" Tiene letras solo MAYUSCULAS");
else
    document.write(" Tiene letras solo minusculas");