function validate(e) {

    switch (e.id) {
        case 'email':
            validateEmail(e.value) ? alert('El mail: ' + e.value + ' Es correcto!!') : alert('El mail: ' + e.value + ' Es incorrecto!!');
            break;
        case 'name':
            validateLetters(e.value) ? alert('El name: ' + e.value + ' Es correcto!!') : alert('El name: ' + e.value + ' Es incorrecto!!');
            break;
        case 'integer':
            validateIntegers(e.value) ? alert('El integer: ' + e.value + ' Es correcto!!') : alert('El integer: ' + e.value + ' Es incorrecto!!');
            break;
        case 'float':
            validateFloat(e.value) ? alert('El flotante: ' + e.value + ' Es correcto!!') : alert('El flotante: ' + e.value + ' Es incorrecto!!');
            break;
        case 'cedula':
            validateCedula(e.value) == 1 ? alert('La cedula: ' + e.value + ' Es correcto!!') : alert('La cedula: ' + e.value + ' Es incorrecto!!');
            break;
        case 'pass':
            validatePasswordMinimal(e.value) ? alert('El pass: ' + e.value + ' Es correcto!!') : alert('El pass: ' + e.value + ' Es incorrecto!!');
            break;
    }
}

function onblurInput(e) {
    if (e.id == 'email')
        if (validateEmail(e.value))
            e.className = 'success';
        else
            e.className = 'alert';

    else if (e.id == 'name')
        if (validateLetters(e.value))
            e.className = 'success';
        else
            e.className = 'alert';
    else if (e.id == 'pass')
        if (validatePasswordMinimal(e.value))
            e.className = 'success';
        else
            e.className = 'alert';
    else if (e.id == 'integer')
        if (validateIntegers(e.value))
            e.className = 'success';
        else
            e.className = 'alert';
    else if (e.id == 'float')
        if (validateFloat(e.value))
            e.className = 'success';
        else
            e.className = 'alert';
    else if (e.id == 'cedula')
        if (validateCedula(e.value) == 1)
            e.className = 'success';
        else
            e.className = 'alert';
}