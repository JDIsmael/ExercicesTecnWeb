function inicia_ajax() {
    //Utiliza un método distinto según el navegador
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

//Recibe 2 parámetros, los datos que se enviarán al servidor
//y el id del div donde se imprimirá el resultado
function consulta_ajax() {
    //Obtenemos el objeto XMLHttpRequest
    var objeto_ajax = inicia_ajax();
    //Petición al servidor por GET, al archivo datos_clientes.php
    //Se envían los datos y por último "true" indica que la conexión será asíncrona
    objeto_ajax.open("GET", "holamundo.txt", true);
    //Al recibir respuesta se ejecuta la función anónima
    objeto_ajax.onreadystatechange = function() {
        //Si readyState es igual a 4 y status es igual a 200 se guarda el resultado devuelto
        if (objeto_ajax.readyState == 4 && objeto_ajax.status == 200) {
            imprime_resultado(objeto_ajax.responseText.split("\n"));
        }
    }
    objeto_ajax.send(null);
}

//Recibe los datos y el id del div donde se va a imprimir
function imprime_resultado(datos_devueltos) {
    var texto = "";
    for (x of datos_devueltos)
        texto += x + "<br>";

    document.getElementById("resultado").innerHTML = texto;
}

function pedir_datos() {
    consulta_ajax();
}