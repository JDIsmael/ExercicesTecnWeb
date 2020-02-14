var numero_n = prompt("ingrese el numero n de la combinacion");
aux = 1;
aux2 = 0;
var numeros = [];
for (var i = 0; i <= numero_n; i++)
    numeros[i] = new Array(numero_n + 1);

function factorialRecursivo(n) {
    if (n == 0)
        return 1;
    return n * factorialRecursivo(n - 1);
}

function combinacion(n, r) {
    return factorialRecursivo(n) / (factorialRecursivo(n - r) * factorialRecursivo(r));
}

function llenar_triangulo() {
    for (var i = 0; i <= numero_n; i++)
        for (var j = 0; j <= i; j++)
            numeros[i][j] = combinacion(i, j);
}

function imprimir_triangulo() {
    for (var i = 0; i <= numero_n; i++) {
        for (var j = 0; j <= i; j++)
            document.write(numeros[i][j] + "&nbsp;");
        document.write("</br>");
    }
}

function letraAorB(control) {
    aux2 = control - 1;
    for (var j = 0; j <= control; j++) {
        document.write(numeros[control][j]);
        if (control != 0) {
            if (j == 0) {
                document.write("a");
                if (control != 1) document.write(control.toString().sup());
            } else if (j == control) {
                document.write("b");
                if (control != 1) document.write(control.toString().sup());
            } else if (j != 0 && j != control) {
                document.write("a");
                if (aux2 != 1) document.write(aux2.toString().sup());

                document.write("b");
                if (aux != 1) document.write(aux.toString().sup());

                aux2--;
                aux++;
            }
        }
        if (j != control)
            document.write(" + ");
    }
    aux2 = 0;
    aux = 1;
}

function imprimir_formula() {
    for (var i = 0; i <= numero_n; i++) {
        document.write("(a + b)" + i.toString().sup() + " = ")
        letraAorB(i);
        document.write("</br>");
    }
}

function run() {
    llenar_triangulo();
    imprimir_triangulo();
    document.write("</br>");
    document.write("</br>");
    imprimir_formula();
}

run();