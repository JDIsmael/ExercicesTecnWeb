function run() {
    var input = 0;
    var dado = [];
    var cont = 0;
    var result = "";

    while (input != 2) {
        input = prompt("Desea Lanzar el dado?\n1.- Lanzar dado\n2.-No Lanzar el dado");
        if (input == 1) {
            dado[cont] = getRandomArbitrary();
            alert("El numero que salio es: " + dado[cont])
            cont++;
        } else {
            for (var i = 0; i < cont; i++) {
                result += "\nLanzamiento Nº" + (i + 1) + "\nSe obtuvo el valor:" + dado[i];
            }
            alert("El usuario realizo: " + cont + " Lanzamientos\n" + result);
        }
    }

}


function getRandomArbitrary() {
    return parseInt(Math.random() * (7 - 1) + 1);
}


run();