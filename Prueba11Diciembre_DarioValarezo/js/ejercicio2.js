function comprobar_name() {
    var name = document.getElementById('name');

    if (name.value.length == 0) {
        error(name);
    } else
        correcto(name)
}

function comprobar_mail() {
    var mail = document.getElementById("mail");

    if (mail.value.length == 0) {
        error(mail);
    } else
        correcto(mail)

}

function comprobar_message() {
    var message = document.getElementById("message");
    if (message.value.length == 0) {
        error(message);
    } else
        correcto(message)

}

function correcto(obj) {
    obj.style.backgroundColor = "white";
    obj.placeholder.style.color = "black";

}

function error(obj) {
    obj.style.backgroundColor = "red";
    obj.placeholder.style.color = "white";

}