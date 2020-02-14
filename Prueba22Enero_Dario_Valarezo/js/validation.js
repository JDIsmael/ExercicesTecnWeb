function onlyNumbers(event, e) {
    var key = event.which || event.keyCode;

    if (e.value == 0)
        return validateIntegers(String.fromCharCode(key), true);
    else
        return validateIntegers(String.fromCharCode(key), false);

}

function validateIntegers(integers, check) {
    let regex = /^\d+$/;

    if (check)
        return regex.test(integers).valueOf() && integers != 0;
    else
        return regex.test(integers).valueOf();
}