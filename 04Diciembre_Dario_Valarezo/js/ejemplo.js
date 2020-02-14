document.getElementById("cambiar").addEventListener("click", cambiar);
document.getElementById("enviar").addEventListener("click", enviar);

function cambiar() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "txt/educado.txt", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200)
            document.getElementById("parrafo").innerHTML = xhr.responseText;
    }
}


function enviar() {
    var su_correo = "correo=" + document.getElementById("correo").value;
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "php/verificar.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(su_correo);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200)
            document.getElementById("respuesta").innerHTML = xhr.responseText;
    }
}