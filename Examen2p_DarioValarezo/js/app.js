function envio() {

    var emailText = "divalarezo@espe.edu.ec";
    var passText = "Dario123";
    var email = $('#email').val();
    var pass = $('#pass').val();

    if (validateEmail(email) && validatePasswordMinimal(pass)) {
        if (emailText == email && passText == pass) {
            location.href = "form/home.html";
        } else
            alert("Contraseña o/y email son incorrectos");
    } else
        alert('Los datos no han sido ingresados correctamente');

}


function validacionForm() {
    var phone = $('#phone').val();
    var name = $('#name').val();
    var cedula = $('#cedula').val();
    var message = $('#message').val();
    var surname = $('#surname').val();

    if (validateLetters(name) && validateIntegers(phone) &&
        phone.length == 10 && validateCedula(cedula) == 1 && validateLetters(surname) && validateLetters(message))
        alert('Sus datos son:\nNombre: ' + name + '\nApellido: ' + surname + '\nCedula: ' + cedula + '\nTelefono: ' + phone + '\nMensaje: ' + message);
    else
        alert("Verifique los datos");

}


function fibonacci(num) {
    var array = [0, 1];
    var texto = 'Los ' + num + ' fibonacci son: ';

    for (var i = 2; i < num; i++)
        array[i] = array[i - 2] + array[i - 1];
    for (x of array)
        texto += '\n' + x;
    return texto;
}

function run() {
    alert(fibonacci(prompt('Ingrese un numero')));
}