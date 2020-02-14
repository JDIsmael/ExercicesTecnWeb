function verifica() {
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    var incremento = document.getElementById('incremento').value;
    //alert('minimo: ' + min + '\nmaximo: ' + max + '\nincremento: ' + '\n(max - min): ' + (max - min));

    if (min < max && incremento <= (max - min))
        return true;
    else {
        alert('Ingresa bien los datos');
        return false;
    }


}


function onlyFloat(event, view) {
    var key = event.which || event.keyCode;

    return validateFloat(String.fromCharCode(key)) && validateFloat(view.value + String.fromCharCode(key));
}

function validateFloat(float) {
    let regex = /^[+-]?([0-9]{0,})*[.,]?([0-9]{0,})?$/;

    return regex.test(float).valueOf() && float.length != 0;
}