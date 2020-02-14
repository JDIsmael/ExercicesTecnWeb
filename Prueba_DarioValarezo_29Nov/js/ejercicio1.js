var patt = new RegExp('^[+]?([0-9]{0,})*[.]?([0-9]{0,})?$');
var parrafo = document.createElement("p");
var parrafo2 = document.createElement("p");
var x;
parrafo.appendChild(document.createTextNode("Caracter ingresado"));
parrafo2.appendChild(document.createTextNode("Solo se permite hasta el 1000"));

function usoOnkeyup() {
    x = document.getElementById("numero");

    if (!patt.test(x.value).valueOf())
        document.body.appendChild(parrafo);
    else if (!(parseInt(x.value) > 0 && parseInt(x.value) <= 1000))
        document.body.appendChild(parrafo2);
}