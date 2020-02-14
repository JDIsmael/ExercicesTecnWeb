var arr = [];
var num = 0;
num = prompt("Ingrese n ");
for (var i = 0; i < num; i++) {
    arr[i] = new Array(num);
}
llenar(num, arr);
llenardiagonal(num, arr);
imprimir(num, arr);






function llenardiagonal(n, arr) {
    var cont = 0;
    var cont1 = n;
    var i = 0;
    var j = 0;
    var aux = j;
    do {
        for (i; i < 1; i++) {
            for (j; j < n; j++) {
                cont++;
                arr[i++][j] = cont;
            }
        }
        cont1--;
        i = 0;
        aux++;
        j = aux;
    } while (cont1 != 0);

}







function numeroDigitos(n) {

    var cant = 0;
    do {
        n = parseInt(n / 10);
        cant++;
    } while (n != 0);

    return cant;
}


function llenar(n, arr) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            arr[i][j] = 0;
        }
    }
}

function imprimir(n, arr) {
    var m = mayor(n, arr);

    var elemento = 0;
    var elemento1 = -1;
    var c;
    var dif = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            elemento++;
            elemento1++;
            c = String(arr[i][j]);
            if (numeroDigitos(arr[i][j]) < m) {
                dif = numeroDigitos(m) - numeroDigitos(arr[i][j]);
                for (var s = 0; s < dif; s++) {
                    c += "&nbsp" + "&nbsp";
                }

            }

            if (elemento1 % n == 0) {
                document.write("<br></br>");
            }
            document.write(c + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp");
        }
    }
}



function mayor(n, arr) {
    var actual = 0;
    var elemento = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            elemento++;
            if (arr[i][j] >= actual) {
                actual = arr[i][j];

            }
        }
    }
    return actual;
}

function descomponer(n) {

    var s = 0;
    var cont = 0;
    var nd = numeroDigitos(n);
    do {
        cont++;
        s = parseInt(n % 10);
        n /= 10;

        if (nd == cont) {
            document.write("Centenas:" + s + "&nbsp" + "&nbsp");
        }
        if (nd - 1 == cont) {
            document.write("Decenas:" + s + "&nbsp" + "&nbsp");
        }
        if (nd - 2 == cont) {
            document.write("Unidades:" + s + "&nbsp" + "&nbsp");
        }
        s /= 10;
    } while (n != 0);
}