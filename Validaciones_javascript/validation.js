function validateEmail(email) {
    let regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    return regex.test(email).valueOf() && email.length != 0;
}

function validateLetters(letters) {
    let regex = /^[a-zA-Z_áéíóúñ\s]*$/;

    return regex.test(letters).valueOf() && letters.length != 0;
}

function validateIntegers(integers) {
    let regex = /^\d+$/;

    return regex.test(integers).valueOf() && integers.length != 0;
}

function validateFloat(float) {
    let regex = /^[+]?([0-9]{0,})*[.,]?([0-9]{0,})?$/;

    return regex.test(float).valueOf() && float.length != 0;
}

function validatePasswordComplete(pass) {
    let regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

    return regex.test(pass).valueOf() && pass.length != 0;
}

function validatePasswordMinimal(pass) {
    let regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    return regex.test(pass).valueOf() && pass.length != 0;
}

function validateCedula(cedula) {

    if (cedula.length == 10 && validateIntegers(cedula)) {
        var digito_region = cedula.substring(0, 2);

        if (digito_region >= 1 && digito_region <= 24) {
            var ultimo_digito = cedula.substring(9, 10);
            var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));
            var numero1 = cedula.substring(0, 1);
            var numero1 = (numero1 * 2);

            if (numero1 > 9) { var numero1 = (numero1 - 9); }

            var numero3 = cedula.substring(2, 3);
            var numero3 = (numero3 * 2);
            if (numero3 > 9) { var numero3 = (numero3 - 9); }

            var numero5 = cedula.substring(4, 5);
            var numero5 = (numero5 * 2);
            if (numero5 > 9) { var numero5 = (numero5 - 9); }

            var numero7 = cedula.substring(6, 7);
            var numero7 = (numero7 * 2);
            if (numero7 > 9) { var numero7 = (numero7 - 9); }

            var numero9 = cedula.substring(8, 9);
            var numero9 = (numero9 * 2);
            if (numero9 > 9) { var numero9 = (numero9 - 9); }

            var impares = numero1 + numero3 + numero5 + numero7 + numero9;

            var suma_total = (pares + impares);

            var primer_digito_suma = String(suma_total).substring(0, 1);

            var decena = (parseInt(primer_digito_suma) + 1) * 10;

            var digito_validador = decena - suma_total;

            if (digito_validador == 10)
                var digito_validador = 0;

            if (digito_validador == ultimo_digito)
                return 1; // si la cedula es correcta
            else
                return -1; // si la cedula es incorrecta
        } else
            return 0; // si la cedula no pertenece a ecuador
    } else
        return 2; // si la cedula excede o no un tamaño de 10 
}

function validateDate(date) {
    let regex = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;

    return regex.test(date).valueOf() && date.length != 0;
}

function validateHour(hour) {
    let regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;

    return regex.test(hour).valueOf() && hour.length != 0;
}