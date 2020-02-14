function numeroPalabras() {
    var str = document.getElementById("texto").value;
    var res = str.split(" ");
    document.getElementById("textoInfo").innerHTML = res.length;
}

function primeraPalabra() {
    var str = document.getElementById("texto").value;
    var res = str.split(" ");
    document.getElementById("textoInfo").innerHTML = res[0];
}

function ultimaPalabra() {
    var str = document.getElementById("texto").value;
    var res = str.split(" ");
    document.getElementById("textoInfo").innerHTML = res[res.length - 1];
}

function ordenInverso() {
    var str = document.getElementById("texto").value;
    var res = str.split(" ");
    var texto = " ";
    var txt = " ";
    for (var i = 0; i < res.length; i++) {
        texto = res[i];
        txt += invertir(texto);
    }
    document.getElementById("textoInfo").innerHTML = txt;
}

function invertir(texto) {
    var txt = "";
    for (var i = texto.length - 1; i >= 0; i--) {
        txt += texto[i];
    }
    txt += "&nbsp";
    return txt;
}

function ordenAlfabetico() {
    var str = document.getElementById("texto").value;
    var res = str.split(" ");
    var texto = " ";
    var txt = " ";
    for (var i = 0; i < res.length; i++) {
        texto = res[i];
        txt += ordenar(texto);
        txt += "&nbsp";
    }
    document.getElementById("textoInfo").innerHTML = txt;
}

function ordenar(str) {
    var arraySplit = str.split("");
    var arraySort = arraySplit.sort();
    var arrayJoin = arraySplit.join("");
    return arrayJoin;
}

function ordenInversoAlfabetico() {
    var str = document.getElementById("texto").value;
    var res = str.split(" ");
    var texto = " ";
    var txt = " ";
    for (var i = 0; i < res.length; i++) {
        texto = res[i];
        txt += ordenInversoPalabra(texto);
        txt += "&nbsp";
    }
    document.getElementById("textoInfo").innerHTML = txt;
}

function ordenInversoPalabra(str) {
    var array = [];
    var cont = 1;
    cont = parseInt(cont, 10);
    var arraySplit = str.split("");
    var arraySort = arraySplit.sort();
    for (var i = 0; i < arraySort.length; i++) {
        array[i] = arraySort[arraySort.length - cont];
        cont++;
    }
    var arrayJoin = array.join("");
    return arrayJoin;
}