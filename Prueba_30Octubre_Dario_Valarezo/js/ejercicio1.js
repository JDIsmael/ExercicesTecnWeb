var n = prompt("Ingrese el numero de iteraciones:");
var x = prompt("Ingrese el valor de X (Radianes):");

document.write("Elemento n = " + n + "</br>Elemento x = " + x + "</br>");
var sumatoria = 0;
var aux = 0;
var numeros = new Array(n);
var numerador = new Array(n);
var denominador = new Array(n);
sin(x, n);

function sin(x, n) {
    document.write("</br>Impresion Formula</br>")
    for (var i = 0; i < n; i++) {
        //document.write("</br>");
        aux = (Math.pow(-1, i) / factorial(2 * i + 1)) * (Math.pow(x, (2 * i + 1)));
        numeros[i] = aux;
        numerador[i] = Math.pow(-1, i) * (Math.pow(x, (2 * i + 1)));
        denominador[i] = factorial(2 * i + 1);
        sumatoria = sumatoria + aux;
        //document.write("valor de la sumatoria cuando:</br> n = " + i + "</br> x = " + x + "</br> sumatoria = " + aux + "</br>");
        document.write("((-1)^" + i + "/(2*" + i + " + 1))*x^(2*" + i + "+1)");
        if (i != (n - 1))
            document.write("  +  ");
        else
            document.write("</br>");
    }

    document.write("</br>Impresion fraccion</br>")
    document.write("</br>sin(" + x + ") = ");

    for (var i = 0; i < n; i++) {
        document.write(numerador[i] + "/" + denominador[i]);
        if (i != (n - 1))
            document.write(" + ");
        else
            document.write("</br>");
    }

    document.write("</br>Impresion Decimal</br>")
    document.write("</br>sin(" + x + ") = ");
    for (var i = 0; i < n; i++) {
        document.write(numeros[i]);
        if (i != (n - 1))
            document.write(" + ");
        else
            document.write("</br>");
    }



    document.write("</br>Valor de sin(" + x + ") es: " + sumatoria);
}

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}